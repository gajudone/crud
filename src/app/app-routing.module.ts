import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users.component';
import { AdduserComponent } from './adduser.component';
import { authGuard } from './auth.guard'
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: '', component: LoginComponent, },
  {path: 'login', component: LoginComponent, },
  {path: 'register', component: RegisterComponent},
  { path: 'users', component: AdduserComponent },
  {path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: UsersComponent },
    { path: 'specs', component: LoginComponent }
  ]},
  { path: 'edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
