import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  constructor(private http: HttpClient) { }

  onLogin(userObj: any) {
    return this.http.post("http://172.17.7.104:8000/api/token/", userObj).pipe(
      
      map((resonse: any) => {
        console.log(resonse);
        if (resonse.access) {
          console.log(resonse);
          sessionStorage.setItem("access", resonse.access)
        }
        return resonse;
      })
    )
  }
  // private apiUrl = 'http://172.17.7.104:8000/api/token/';
  // constructor(private http: HttpClient) {}

  // onLogin(obj: any): Observable<any> {
  //   return this.http.post('http://172.17.7.104:8000/api/token/', obj);
  // }

  // getUserDetails(): Observable<any> {
  //   const token = localStorage.getItem('access');
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
  //   return this.http.get(this.apiUrl, { headers });
  // }
  // onlogOut() {
  //   sessionStorage.clear()
}
