import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isMenuOpen = false;


  // Fonction pour toggle le menu sur petit ecrean
  toggleMenu():void{
    this.isMenuOpen = !this.isMenuOpen
  }
}