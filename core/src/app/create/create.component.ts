import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements AfterViewInit  {
  
  isOpen:Boolean = false;
  openMenus: {[key: string]: boolean} = {};

  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef;

  ngAfterViewInit() {
    new Chart(this.chartCanvas.nativeElement, {
      type: 'bar', // Type de graphique
      data: {
        labels: ['A', 'B', 'C'], // Étiquettes
        datasets: [
          {
            label: 'Données simples',
            data: [10, 20, 30], // Données
            backgroundColor: ['red', 'blue', 'green'], // Couleurs
          },
        ],
      },
    });
  }
    // Fonction pour faire sortire le petit menu des projet crée
    LinkMenu(menuId: string):any{
      this.openMenus[menuId] = !this.openMenus[menuId]
    }

    // Fonction pour ajouter un nouveau projet
    AddLink():any{
      this.isOpen = !this.isOpen
    }

    // Graphique pour chart
   
}
