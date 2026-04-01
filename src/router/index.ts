import{JobSpec,RouteResult,GpuOffer}from'../types';
import{AggregatorClient}from'../aggregator';
import{MOD_DISCOUNT_BPS}from'../config/constants';
export class Router{
  private agg=new AggregatorClient();
  async route(spec:JobSpec):Promise<RouteResult[]>{
    const offers=await this.agg.fetchOffers({gpu:spec.gpu,gpuCount:spec.gpuCount,region:spec.region});
    return offers.filter(o=>o.available).filter(o=>!spec.maxPricePerHour||o.pricePerHour<=spec.maxPricePerHour).sort((a,b)=>a.pricePerHour-b.pricePerHour).map(o=>this.build(o,spec));
  }
  private build(o:GpuOffer,s:JobSpec):RouteResult{
    const base=o.pricePerHour*s.durationHours*s.gpuCount;
    const disc=s.payWithMod?(base*MOD_DISCOUNT_BPS)/10000:0;
    return{offer:o,estimatedCost:base-disc,modDiscount:disc,routeId:`rte_${Date.now()}`};
  }
}
