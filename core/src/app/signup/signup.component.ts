import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service' ; 
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { signUpData } from '../data';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  


})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  signupError: boolean = false;
  animation:boolean = false; // Animation si onclick sur le button

    constructor(private router:Router, private apiService:ApiService, private fb:FormBuilder){}


    ngOnInit():void {
      this.signupForm = this.fb.group({
        username: ['', Validators.required],
        email : ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(6)]]
      })
    }

    // Fonction pour terminer l'envoyer des données depuis backend
    sendData(){
      this.animation = !this.animation
      // Valider la formulaire avant de lancer
      if (this.signupForm.valid ){
        // Récuperation des données
        const data = {
          username: this.signupForm.get('username')?.value,
          email: this.signupForm.get('email')?.value,
          password: this.signupForm.get('password')?.value
        };
        // Envoyer de requete post
        this.apiService.signUp(data).subscribe({
          next: (response:signUpData)=> {
            
            const token = response.token;
            // console.log(token);
            localStorage.setItem('token', token);
            this.router.navigate(['/create'])
            this.animation = !this.animation

          },
          error: (err)=>{
            // console.error('Erreur dans le composant:', err)
            this.animation = !this.animation
            this.signupError = !this.signupError
          }
        });
      }
     
     
    }


      // lES FONCTION POUR NAVIGER SUR UNE NOUVELLE PAGE


    navigateToLogin():any{
      this.router.navigate(['/login'])
    }
}
