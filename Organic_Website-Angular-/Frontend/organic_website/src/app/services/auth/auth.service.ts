import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

 
  isAuthenticated(): boolean {

    return !!localStorage.getItem('email');
  }
}
