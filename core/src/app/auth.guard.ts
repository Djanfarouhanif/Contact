import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthentificated = !!localStorage.getItem("token");

  if(!isAuthentificated){
    const router = inject(Router);
    router.navigate(['/login']);
    
    return false
  }
  return true;
};
