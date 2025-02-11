import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { authGuard } from './auth.guard';
export const routes: Routes = [
    {path: "", redirectTo:"/home", pathMatch:'full'},
    {'path': 'home', component: HomeComponent, canActivate: [authGuard] },
    {path: 'signup', component: SignupComponent, canActivate: [authGuard]},
    {path: 'login', component: LoginComponent, canActivate: [authGuard]},
    {path: 'create', component: CreateComponent, canActivate: [authGuard] }
];
