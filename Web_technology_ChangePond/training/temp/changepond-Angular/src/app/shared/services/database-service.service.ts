import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

  baseUrl: string = "http://localhost:8888";

  constructor(private http: HttpClient) { }

  // get request 
  getRecord(tableName: string) {
    return this.http.get(`${this.baseUrl}/${tableName}`);
  }
  //  delete request 
  deleteRecord(tableName: string, id: any) {
    return this.http.delete(`${this.baseUrl}/${tableName}/${id}`);
  }
  // post request 
  addRecord(tableName:string,data:any){
    return this.http.post(`${this.baseUrl}/${tableName}`,data);
  }

  // make get request for single record 
  getSingleRecord(tableName:any,id:any){
  return this.http.get(`${this.baseUrl}/${tableName}/${id}`);
  }
  
  //put request
  updateRecord(tableName:string,id:any,data:any){
   return this.http.put(`${this.baseUrl}/${tableName}/${id}`,data);
  }

}
