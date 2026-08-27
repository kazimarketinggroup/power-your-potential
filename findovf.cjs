const http = require('http');
const { spawn } = require('child_process');
const edge = String.raw`C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`;

const child = spawn(edge, [
  '--headless=new','--disable-gpu','--remote-debugging-port=9222',
  '--window-size=390,900','http://localhost:3800/'
], { stdio: 'ignore' });

const get = (u) => new Promise((res, rej) => http.get(u, r => { let d=''; r.on('data',c=>d+=c); r.on('end',()=>res(JSON.parse(d))); }).on('error', rej));

setTimeout(async () => {
  try {
    const list = await get('http://127.0.0.1:9222/json');
    const page = list.find(t => t.type === 'page' && t.url.includes('3800'));
    if (!page) { console.log('no page', JSON.stringify(list.map(t=>t.url))); child.kill(); return process.exit(0); }

    const WebSocket = require('ws');
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    ws.on('open', () => {
      ws.send(JSON.stringify({ id:1, method:'Runtime.evaluate', params:{
        returnByValue:true,
        expression:`(()=>{const vw=document.documentElement.clientWidth;const out=[];document.querySelectorAll('*').forEach(el=>{const r=el.getBoundingClientRect();if(r.right>vw+1||r.left<-1){out.push({tag:el.tagName,cls:(el.className&&el.className.baseVal!==undefined?el.className.baseVal:String(el.className)).slice(0,110),left:Math.round(r.left),right:Math.round(r.right),w:Math.round(r.width)});}});return {vw, scrollW:document.documentElement.scrollWidth, count:out.length, items:out.slice(0,15)};})()`
      }}));
    });
    ws.on('message', (m) => {
      const d = JSON.parse(m.toString());
      if (d.id === 1) { console.log(JSON.stringify(d.result?.result?.value, null, 2)); ws.close(); child.kill(); process.exit(0); }
    });
    ws.on('error', e => { console.log('WS ERR', e.message); child.kill(); process.exit(0); });
  } catch(e) { console.log('ERR', e.message); child.kill(); process.exit(0); }
}, 9000);
