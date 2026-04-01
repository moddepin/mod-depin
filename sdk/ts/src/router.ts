export class Router{
  constructor(private k:string,private u='https://api.moddepin.xyz'){}
  async route(s:object):Promise<object[]>{
    const r=await fetch(`${this.u}/v1/route`,{method:'POST',headers:{'Authorization':`Bearer ${this.k}`,'Content-Type':'application/json'},body:JSON.stringify(s)});
    if(!r.ok)throw new Error(`${r.status}`);
    return r.json();
  }
}
