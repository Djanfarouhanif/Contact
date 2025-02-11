import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { authGuard } from './auth.guard';
import { redirectGuard } from './redirect.guard';
export const routes: Routes = [
    {path: "", redirectTo:"/home", pathMatch:'full'},
    {'path': 'home', component: HomeComponent,canActivate: [redirectGuard] },
    {path: 'signup', component: SignupComponent, canActivate: [redirectGuard]},
    {path: 'login', component: LoginComponent, canActivate: [redirectGuard]},
    {path: 'create', component: CreateComponent, canActivate: [authGuard] }
];
