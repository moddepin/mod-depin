import{Router}from'../src/router';
async function bench(n:number){const r=new Router();const s={gpu:'H100'as const,gpuCount:1,durationHours:1};const t=Date.now();await Promise.all(Array.from({length:n},()=>r.route(s)));console.log(`${n} calls: ${Date.now()-t}ms`);}
bench(50);
