import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

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
        this.http.get(`https://jsonplaceholder.typicode.com/posts`)
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    deleteUser(id: string) {
        // const user = this.users!.find(x => x.id === id);
        // user.isDeleting = true;
        // this.accountService.delete(id)
        //     .pipe(first())
        //     .subscribe(() => this.users = this.users!.filter(x => x.id !== id));
    }
}

  


