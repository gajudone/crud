import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
    users: any;

    constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private http: HttpClient,
  ) { }

    ngOnInit() {
        this.http.get(`http://localhost:8080/NewDB`)
            .pipe(first())
            .subscribe(users => {this.users = users
              console.log(users);
            });
    }

    editUser(id: any, value: any){
      this.http.put(`http://localhost:8080/NewDB/${id}`, value).subscribe(v=>console.log(v));
      this.router.navigate(['/edit']);
    }

    deleteUser(id: string) {
        // const user = this.users!.find((x: any) => x._id === id);
        // console.log(user);
        // console.log(id);
        //user.isDeleting = true;
        // this.accountService.delete(id)
        //     .pipe(first())
        //     .subscribe(() => this.users = this.users!.filter(x => x.id !== id));
        this.http.delete(`http://localhost:8080/NewDB/${id}`)
            // .pipe(
            // //   map(x => {
            // //     // auto logout if the logged in user deleted their own record
            // //     // if (id == this.userValue?.id) {
            // //     //     this.logout();
            // //     // }
            // //     return x;
            // // })
            // )
            // .subscribe(() => {console.log(this.users);
            //   return this.users = this.users!.filter((x:any) => x._id !== id)});
            .pipe(map(x => {
              // auto logout if the logged in user deleted their own record
              // if (id == this.userValue?.id) {
              //     this.logout();
              // }
              return this.users = this.users!.filter((x:any) => x._id !== id);
          })).subscribe((v)=>{
            console.log(v);
          });
    }
}

  


