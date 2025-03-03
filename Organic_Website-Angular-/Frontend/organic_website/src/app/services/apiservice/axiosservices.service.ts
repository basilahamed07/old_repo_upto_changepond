import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GenericApiService {
  private apiUrl = 'http://localhost:8000/api';
  private access: string | null = sessionStorage.getItem("access");

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    console.log(this.access)
    return new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem("access")}`
    });
  } 

  download(endpoint: string, options?: { headers?: HttpHeaders, responseType?: 'blob' | 'json' }): Observable<any> {
    return this.http.get(`${this.apiUrl}${endpoint}`);
  }


  get(endpoint: string, params?: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiUrl}/${endpoint}`, { headers, params }).pipe(
      tap(response => console.log('API Response:', response))
    );
  }

  post(endpoint: string, body: any, params?: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(`${this.apiUrl}/${endpoint}`, body, { headers, params });
  }

  put(endpoint: string, body: any, params?: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put(`${this.apiUrl}/${endpoint}`, body, { headers, params });
  }

  delete(endpoint: string, params?: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete(`${this.apiUrl}/${endpoint}`, { headers, params });
  }

  // New PATCH method
  patch(endpoint: string, body: any, params?: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.patch(`${this.apiUrl}/${endpoint}`, body, { headers, params });
  }
}
