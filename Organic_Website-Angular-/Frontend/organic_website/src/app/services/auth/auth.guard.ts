import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';


const ADMIN_EMAIL = 'admin@gmail.com';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userEmail = sessionStorage.getItem("email");

 
  if (userEmail) {
   
    if (route.url[0]?.path === 'admindash' && userEmail !== ADMIN_EMAIL) {
      router.navigate(['/access-denied']); 
      return false;
    }
    return true;
  }


  router.navigate(['/login']); 
  return false;
};
