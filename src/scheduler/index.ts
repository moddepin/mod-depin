import{RouteResult,JobSpec}from'../types';
export class Scheduler{
  async submit(r:RouteResult,_s:JobSpec):Promise<string>{return`job_${r.routeId}`;}
  async status(id:string):Promise<'pending'|'running'|'done'|'failed'>{void id;return'pending';}
}
