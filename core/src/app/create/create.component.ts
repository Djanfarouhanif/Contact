import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Chart, registerables} from 'chart.js';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Data } from '../data';

Chart.register(...registerables)

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',


})
export class CreateComponent implements OnInit  {
  
  isOpen:Boolean = false;
  openMenus: {[key: string]: boolean} = {};
  linkForm!: FormGroup;
  urlDatas: Data[] = [];


  constructor(private apiService:ApiService, private fb:FormBuilder){}

  // Récupere les données d'URL
  getUrls():void {

    const data = {
      user: 'hanif@gmail.com'
    }
    this.apiService.getUrlData().subscribe(
     {
      next: (data) =>{
       
      this.urlDatas = data
      // After I change email by the link name 
      const emailData = data.map((urlData)=> urlData.user);
      const clickData = data.map((urlData)=>urlData.clicks);
      console.log(clickData);
      this.updateChartData(clickData, emailData);
     
      },
      error: (erro)=>{
        console.log('error', erro);
      }
     }
    
    )
  }


// Données des graphique de chart
  public config: any = {
    type: 'bar',
     data : {
      labels: ['',''],
      datasets: [{
        label: 'My First Dataset',
        data: [0],
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

  this.linkForm = this.fb.group({
    // Modifier apres pour metre la description
    email: ['',[Validators.required, Validators.email]],
    url: ['', [Validators.required]]
  });
  // Initialisation du graphique
  this.chart = new Chart('MyChart', this.config);
  // Récuper tout les objes url crée
  this.getUrls();
  
}

// Fonction pour mettre ajour les datasete
updateChartData(newData:any, labelsData:any){
  if(this.chart && this.chart.data && this.chart.data.datasets){
    console.log("********************", labelsData);
    this.chart.data.labels = labelsData
    this.chart.data.datasets[0].data = newData
    this.chart.update(); // Mettre ajour les information
  }
 
};

  
  // Fonction pour ajouter un nouveau lien
  addLink(){

    // Verifier si le formulaire est bon avant de contunier
    if(this.linkForm.valid){
      const data = {
        user: this.linkForm.get('email')?.value,
        url: this.linkForm.get('url')?.value
      };

      this.apiService.addLink(data).subscribe({
        next: response=>{
          console.log('success',response);
          this.isOpen = !this.isOpen
          // Suprimer l'element du formulaire apres l'envoyer
          this.linkForm.reset()
        },
        error: erro=>{
          console.error('error', erro)
        }
      });
    }
    
   
  };
 
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
