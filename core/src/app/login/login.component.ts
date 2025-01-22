import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


    constructor(private router:Router){}

    // Fonction pour rediriger ver page de creation des lien
    navigateToCreate(){
      this.router.navigate(['/create'])
    }

    // Fonction pour rediriger ver signup
    navigateToSignUp(){
      this.router.navigate(['/signup'])
    }
}
