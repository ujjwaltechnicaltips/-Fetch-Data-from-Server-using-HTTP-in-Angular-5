import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IBiodates} from './services/biodata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiodataService {

  constructor(private http:HttpClient) { }

biodata():Observable<IBiodates[]>
{
  return this.http.get<IBiodates[]>('https://jsonplaceholder.typicode.com/posts')
}



}
