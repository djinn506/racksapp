import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stack } from './stack-list/stack';

const URL = environment.apiUrl + 'component';
/* const URL = "https://racks-api2.onrender.com/component"; */
@Injectable({
  providedIn: 'root',
})
export class StackDataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<Stack[]> {
    return this.http.get<Stack[]>(URL);
  }
  createStack(stack: any): Observable<Stack> {
    return this.http.post<Stack>(URL, stack, this.httpOptions);
  }
  /*  createStack(stack :stack): Observable<Stack> {
    return this.http.post<Stack>(URL, stack, this.httpOptions);
  }*/
}
