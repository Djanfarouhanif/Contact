import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

    isOpen:Boolean = false;
    openMenu:Boolean = false;


    // Fonction pour faire sortire le petit menu des projet crée
    LinkMenu():any{
      this.openMenu = !this.openMenu;
    }

    // Fonction pour ajouter un nouveau projet
    AddLink():any{
      this.isOpen = !this.isOpen
    }
}
