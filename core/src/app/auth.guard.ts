import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthentificated = !!localStorage.getItem("token");

    const router = inject(Router)
    // rediriger l'utisateur a la page login si n'est pas authenifier 
  if(!isAuthentificated){
    
    router.navigate(['/login']);
    
    return false
  }

  if(isAuthentificated){
    router.navigate(['/create'])
    return false
  }

  return true;
};
