import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Server } from './server-list/server';

const URL = environment.apiUrl + 'server';
@Injectable({
  providedIn: 'root',
})
export class ServerDataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<Server[]> {
    return this.http.get<Server[]>(URL);
  }
  createServer(stack: any): Observable<Server> {
    return this.http.post<Server>(URL, stack, this.httpOptions);
  }
}
