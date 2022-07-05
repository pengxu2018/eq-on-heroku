import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BwmAgent } from 'src/app/entity/interfaces';


@Injectable({
  providedIn: 'root'
})







export class AgentService {

  private agentUrl = environment.apiUrl + 'agent/';
  private httpHeaders;

  constructor(private http:HttpClient) {
    this.httpHeaders = new HttpHeaders()
    .append('Accept', 'application/json')
    .append('Content-Type', 'application/json');
   }

  getAgents():Observable<BwmAgent[]>{
    return this.http.get<BwmAgent[]>(this.agentUrl + 'all')
  }

  getAgent(agentId: number):Observable<BwmAgent>{
    return this.http.get<BwmAgent>(this.agentUrl + agentId);
  }

  creatAgent(agent: BwmAgent){
    console.log('***** agent: ' + JSON.stringify(agent));
    return this.http.post(this.agentUrl, JSON.stringify(agent), {headers: this.httpHeaders});
  }

  updateAgent(agent:BwmAgent){
    return this.http.put(this.agentUrl+'/'+ agent.id, JSON.stringify({isRead:true}) )
  }

  deleteAgent(agent:BwmAgent){
    return this.http.delete(this.agentUrl + '/' + agent.id)
  }



}


