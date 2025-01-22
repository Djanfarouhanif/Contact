import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isMenuOpen = false;

  constructor(private router:Router){}

 navigateToSignUp():any{
    this.router.navigate(['/signup'])
 }
 navigateToLogin():any{
  this.router.navigate(['/login'])
 }

  // Fonction pour toggle le menu sur petit ecrean
  toggleMenu():void{
    this.isMenuOpen = !this.isMenuOpen
  }
}