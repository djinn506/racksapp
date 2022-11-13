import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stack } from './stack-list/stack';

const URL = "http://localhost:3000/stacks";
@Injectable({
  providedIn: 'root'
})
export class StackDataService {

  constructor(private http: HttpClient) { }

   getAll(): Observable<Stack[]> {

    return this.http.get<Stack[]>(URL);
  }
}
