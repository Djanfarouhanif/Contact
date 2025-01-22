import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {


    constructor(private router:Router){}
    navigateToCreate():any{
      this.router.navigate(['/create']);
    }

    navigateToLogin():any{
      this.router.navigate(['/login'])
    }
}
