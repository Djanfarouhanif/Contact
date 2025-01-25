import { Component, OnInit  } from '@angular/core';

import { CommonModule } from '@angular/common';
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables)

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',


})
export class CreateComponent implements OnInit  {
  
  isOpen:Boolean = false;
  openMenus: {[key: string]: boolean} = {};

  public config: any = {
    type: 'line',

    
     data : {
      labels: ["Lundi", 'Mardi', 'Mercredi', 'Jeudi','Vendredi', 'Samedi', 'Dimache'],
      datasets: [{
        label: 'My First Dataset',
        data: [105, 159, 890, 181, 506, 55, 440],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    }
  }

chart: any
ngOnInit(): void {
  this.chart = new Chart('MyChart', this.config);
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
