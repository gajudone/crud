import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private http: HttpClient,
  ) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
          userType: ['Guest', Validators.required],
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }
  onSubmit(value: any){
    this.http.post(`http://localhost:3000/posts`, {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    });
    console.log(value);
    this.router.navigate(['login'])
  }

}
