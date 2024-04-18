import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventLogs } from '../models/eventlogs';

@Injectable({
  providedIn: 'root'
})
export class EventlogsService {

  constructor(private http:HttpClient) { }

  url:string = "https://localhost:44358/api/eventlogs";

  getEventLog(){
    return this.http.get(this.url)
  }
  postEventLog(eventlog: EventLogs): Observable<EventLogs>{
    return this.http.post<EventLogs>(this.url, eventlog);
  }
  updateEventLog(EventLodId:number, eventlog:EventLogs): Observable<EventLogs>{
    return this.http.put<EventLogs>(this.url + `/${EventLodId}`, eventlog)
  }
  deleteEventLog(EventLodId:number){
    return this.http.delete(this.url + `/${EventLodId}`);
  }
}
