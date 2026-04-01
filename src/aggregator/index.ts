import{GpuOffer,Provider}from'../types';
import{PROVIDERS}from'../config/providers';
export class AggregatorClient{
  async fetchOffers(f:Partial<GpuOffer>):Promise<GpuOffer[]>{
    const r=await Promise.allSettled(PROVIDERS.map(p=>this.fetch(p,f)));
    return r.filter((x):x is PromiseFulfilledResult<GpuOffer[]>=>x.status==='fulfilled').flatMap(x=>x.value);
  }
  private async fetch(p:Provider,_f:Partial<GpuOffer>):Promise<GpuOffer[]>{throw new Error(`Adapter not implemented: ${p}`);}
}
