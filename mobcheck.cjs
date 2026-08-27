const http = require('http');
const { spawn } = require('child_process');
const WebSocket = require('ws');
const edge = String.raw`C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`;
const PORT = 9223;
const url = process.argv[2] || 'http://localhost:3800/';
const W = parseInt(process.argv[3] || '390', 10);

const child = spawn(edge, ['--headless=new','--disable-gpu',`--remote-debugging-port=${PORT}`,'--window-size=900,900', url], { stdio:'ignore' });
const get = u => new Promise((res,rej)=>http.get(u,r=>{let d='';r.on('data',c=>d+=c);r.on('end',()=>res(JSON.parse(d)))}).on('error',rej));

setTimeout(async () => {
  try {
    const list = await get(`http://127.0.0.1:${PORT}/json`);
    const page = list.find(t=>t.type==='page' && t.url.includes('3800'));
    if(!page){ console.log('no page'); child.kill(); return process.exit(1); }
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    let id=0; const pend={};
    const send=(method,params={})=>new Promise(r=>{const i=++id;pend[i]=r;ws.send(JSON.stringify({id:i,method,params}))});
    ws.on('message',m=>{const d=JSON.parse(m.toString()); if(d.id&&pend[d.id]){pend[d.id](d.result);delete pend[d.id];}});
    ws.on('open', async () => {
      await send('Emulation.setDeviceMetricsOverride',{width:W,height:844,deviceScaleFactor:1,mobile:true});
      await send('Page.enable');
      await send('Page.navigate',{url});
      await new Promise(r=>setTimeout(r,6000));
      const r = await send('Runtime.evaluate',{returnByValue:true,expression:`(()=>{const vw=document.documentElement.clientWidth;const out=[];document.querySelectorAll('*').forEach(el=>{const b=el.getBoundingClientRect();if(b.width>0&&(b.right>vw+1||b.left<-1)){out.push({tag:el.tagName,cls:String(el.className&&el.className.baseVal!==undefined?el.className.baseVal:el.className).slice(0,100),l:Math.round(b.left),r:Math.round(b.right),w:Math.round(b.width)})}});return{vw,scrollW:document.documentElement.scrollWidth,bodyW:document.body.scrollWidth,rootFont:getComputedStyle(document.documentElement).fontSize,count:out.length,items:out.slice(0,12)}})()`});
      console.log(JSON.stringify(r.result.value,null,2));
      ws.close(); child.kill(); process.exit(0);
    });
  } catch(e){ console.log('ERR',e.message); child.kill(); process.exit(1); }
}, 8000);
