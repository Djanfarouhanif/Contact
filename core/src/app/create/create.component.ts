import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js';
import { provideCharts,BaseChartDirective,withDefaultRegisterables } from 'ng2-charts';



@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [provideCharts(withDefaultRegisterables())]
})
export class CreateComponent  {
  
  isOpen:Boolean = false;
  openMenus: {[key: string]: boolean} = {};

 
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
