import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseserviceService {

  baseurl:string = "http://localhost:8888";
  constructor(private http:HttpClient) {}
    getRecord(tableName:string){
return this.http.get(`${this.baseurl}/ ${tableName}`)
    }

} 
