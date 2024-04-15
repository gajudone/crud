import { CanActivateFn } from '@angular/router';
import { ApiService } from './api.service';

export const authGuard: CanActivateFn = (route, state) => {
    
  if(localStorage.getItem('token')){
    alert('ter');
    return true
  }
  else{
    alert('not logged');
    return false;}
  
};

