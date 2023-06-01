import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users.component';
import { AdduserComponent } from './adduser.component';
import { authGuard } from './auth.guard'

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [authGuard]},
  {path: 'login', component: LoginComponent, canActivate: [authGuard]},
  {path: 'register', component: RegisterComponent},
  { path: 'users', component: AdduserComponent },
  {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard], children: [
    { path: '', component: UsersComponent },
    { path: 'specs', component: LoginComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
