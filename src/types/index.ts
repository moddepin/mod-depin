export type Provider='akash'|'ionet'|'nosana';
export type GpuClass='H100'|'A100'|'A10G'|'L40S'|'RTX4090'|'RTX3090'|'T4';
export type Region='us-east'|'us-west'|'eu-central'|'ap-southeast';
export interface GpuOffer{id:string;provider:Provider;gpu:GpuClass;gpuCount:number;region:Region;pricePerHour:number;available:boolean;latencyMs?:number;}
export interface RouteResult{offer:GpuOffer;estimatedCost:number;modDiscount:number;routeId:string;}
export interface JobSpec{gpu:GpuClass;gpuCount:number;durationHours:number;region?:Region;maxPricePerHour?:number;payWithMod?:boolean;}
