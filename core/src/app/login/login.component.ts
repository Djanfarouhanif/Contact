import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { loginData } from '../data';
import { CommonModule} from '@angular/common'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  loginErro: boolean = false; // Les erreurs 
  animation:Boolean = false ; // Un pop pour atteindre

    constructor(private router:Router, private fb : FormBuilder, private apiService: ApiService){

      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]]
      });
    };

    onSubmit(){

      this.animation = !this.animation
      // Verifier si la formulaire est valide avent d'executer 
      if(this.loginForm.valid){

        // Fonction pour recuper les données du formulaire
        const data = {
          username : this.loginForm.get("username")?.value,
          password : this.loginForm.get("password")?.value
        };

        // Execution de la requete pour loger le user 
        this.apiService.loginUser(data).subscribe({
          next: (response:loginData) => {
            // console.log(response.token);
            const token = response.token
            // Enregister le token apres le login
            localStorage.setItem('token',token)
            
            // Redirige ver la page de créeatin
            this.navigateToCreate()
            this.animation = !this.animation
          },
          error: erro=>{
            this.loginErro = !this.loginErro
            this.animation = !this.animation
          }
        })
      }

       
    }

    // Fonction pour rediriger ver page de creation des lien
    navigateToCreate(){
      this.router.navigate(['/create'])
    }

    // Fonction pour rediriger ver signup
    navigateToSignUp(){
      this.router.navigate(['/signup'])
    }
}
