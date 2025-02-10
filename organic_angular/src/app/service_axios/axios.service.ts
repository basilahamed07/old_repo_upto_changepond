import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import axios from 'axios';


import { map } from 'rxjs';
import { readFile } from 'fs/promises';
@Injectable({
  providedIn: 'root'
})
export class AxiosService {
  private baseUrl: string = 'http://localhost:8000/api'; // Replace with your API base URL
  constructor() { }




  // for using the http client method
  // postdetahttp(userobj:any){
  //   return this.http.post("http://localhost:8000/api", userobj).pipe(

  //     map((resonse:any) => {

  //       console.log(resonse);
  //       if(resonse.Category_Name){
  //         console.log(resonse)
  //       }
  //       return resonse
  //     })

  //   )
  // }







  // ---------------------by using axios method ----------------------
  // Method to get data all data
  getData(endpoint: string) {
    return axios.get(`${this.baseUrl}/${endpoint}`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error;
      });
  }

  // Method to get sigle data
  getsingledta(endpoint: string,id:any) {
    return axios.get(`${this.baseUrl}/${endpoint}${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error;
      });
  }


   // Method to post data
   postData(endpoint: string, data: any) {
    return axios.post(`${this.baseUrl}/${endpoint}`, data)
      .then(response => response.data)
      .catch(error => {
        console.error('Error posting data:', error);
        throw error;
      });
  }


  // put
  puts(endpoint: string,id:any ,data: any) {
    return axios.put(`${this.baseUrl}/${endpoint}${id}`, data)
      .then(response => response.data)
      .catch(error => {
        console.error('Error puts data:', error);
        throw error;
      });
  }



  //delite

  deletedata(endpoint: string, id: any) {
    return axios.delete(`${this.baseUrl}/${endpoint}${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error delete data:', error);
        throw error;
      });
  }


}
