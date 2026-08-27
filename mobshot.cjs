const http=require('http'), fs=require('fs'), {spawn}=require('child_process'), WebSocket=require('ws');
const edge=String.raw`C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`;
const PORT=9224, url=process.argv[2], out=process.argv[3], W=parseInt(process.argv[4]||'390',10), H=parseInt(process.argv[5]||'844',10);
const child=spawn(edge,['--headless=new','--disable-gpu',`--remote-debugging-port=${PORT}`,'--window-size=900,900',url],{stdio:'ignore'});
const get=u=>new Promise((res,rej)=>http.get(u,r=>{let d='';r.on('data',c=>d+=c);r.on('end',()=>res(JSON.parse(d)))}).on('error',rej));
setTimeout(async()=>{
  try{
    const list=await get(`http://127.0.0.1:${PORT}/json`);
    const page=list.find(t=>t.type==='page'&&t.url.includes('3800'));
    const ws=new WebSocket(page.webSocketDebuggerUrl); let id=0; const pend={};
    const send=(m,p={})=>new Promise(r=>{const i=++id;pend[i]=r;ws.send(JSON.stringify({id:i,method:m,params:p}))});
    ws.on('message',m=>{const d=JSON.parse(m.toString());if(d.id&&pend[d.id]){pend[d.id](d.result);delete pend[d.id]}});
    ws.on('open',async()=>{
      await send('Emulation.setDeviceMetricsOverride',{width:W,height:H,deviceScaleFactor:2,mobile:true});
      await send('Page.enable'); await send('Page.navigate',{url});
      await new Promise(r=>setTimeout(r,7000));
      const r=await send('Page.captureScreenshot',{format:'png'});
      fs.writeFileSync(out,Buffer.from(r.data,'base64'));
      console.log('saved',out); ws.close(); child.kill(); process.exit(0);
    });
  }catch(e){console.log('ERR',e.message);child.kill();process.exit(1)}
},8000);
