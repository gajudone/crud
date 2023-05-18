import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
) { }

ngOnInit() {
  this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  
}
onSubmit() {
  this.http.get<any>("http://localhost:3000/posts")
  .subscribe((res:any)=>{
     console.log(res);
    // const user = res.find((a:any)=>{
    //   return a.lastName === username && a.password === password
    });
    this.router.navigate(['dashboard'])

}

}
