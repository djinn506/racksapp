import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Server } from './server-list/server';


const URL = "http://localhost:3000/orders";


@Injectable({
  providedIn: 'root'
})
export class ServerDataService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Server[]> {
    return this.http.get<Server[]>('http://localhost:3000/orders');
  }
}
