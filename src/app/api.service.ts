import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient, public router: Router) { }
  
  useHttp(){
    console.log('vbvbvbb');
    this.router.navigate(['login']);
  }
}
