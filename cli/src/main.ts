const[,,cmd,...a]=process.argv;
if(cmd==='route'){const{Router}=require('../../src/router');new Router().route(JSON.parse(a[0]||'{}')).then((r:any)=>console.log(JSON.stringify(r,null,2))).catch(console.error);}
else console.log('Usage: mod-depin route \'{...}\'');
