import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

    isOpen:Boolean = false;
    openMenus: {[key: string]: boolean} = {};
    public chart: any;


    // Fonction pour faire sortire le petit menu des projet crée
    LinkMenu(menuId: string):any{
      this.openMenus[menuId] = !this.openMenus[menuId]
    }

    // Fonction pour ajouter un nouveau projet
    AddLink():any{
      this.isOpen = !this.isOpen
    }

    // Graphique pour chart
    createChart(){

      this.chart = new Chart("MyChart", {
        type: 'bar', //this denotes tha type of chart
  
        data: {// values on X-Axis
          labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
                                   '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
             datasets: [
            {
              label: "Sales",
              data: ['467','576', '572', '79', '92',
                                   '574', '573', '576'],
              backgroundColor: 'blue'
            },
            {
              label: "Profit",
              data: ['542', '542', '536', '327', '17',
                                       '0.00', '538', '541'],
              backgroundColor: 'limegreen'
            }  
          ]
        },
        options: {
          aspectRatio:2.5
        }
  
      });
    }
}
