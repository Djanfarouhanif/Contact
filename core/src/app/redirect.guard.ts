import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const redirectGuard: CanActivateFn = (route, state) => {

  const isAuthentificated = localStorage.getItem('token');
  const router = inject(Router)
  if(isAuthentificated){
    // si l'utisateur est connecter on lui redirect a create
    router.navigate(['/create']);
    return false
  }
  return true;
};
