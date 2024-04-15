import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    // private route: ActivatedRoute,
    // private router: Router,
    // private http: HttpClient,
) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
        userType: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}

onSubmit(value: any){
  // this.http.post(`http://localhost:8080`, value).subscribe(v=>console.log(v));
  // console.log(value);
  // this.router.navigate(['login'])
}
}
