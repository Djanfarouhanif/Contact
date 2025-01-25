import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {


    constructor(private router:Router, private apiService:ApiService ){}

    // Fonction pour terminer l'envoyer des données depuis backend
    sendData(){
      const data = {
        username: "",
        email: "",
        password: ""
      };
      this.apiService.postData(data).subscribe({
        next: (response)=>{
          console.log('Succèss', response)
        },
        error: (err)=>{
          console.error('Erreur dans le composant:', err)
        }
      });
    }


      // lES FONCTION POUR NAVIGER SUR UNE NOUVELLE PAGE
    navigateToCreate():any{
      this.router.navigate(['/create']);
    }

    navigateToLogin():any{
      this.router.navigate(['/login'])
    }
}
