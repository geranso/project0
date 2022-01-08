import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  constructor(private http: HttpClient) { }
  getTodos(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/todos").pipe(map((res:any)=> res))
  }
}
