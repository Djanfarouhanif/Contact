import { Component, inject, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Chart, registerables} from 'chart.js';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { urlData , urlItem, url} from '../data';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

Chart.register(...registerables)
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',

})

export class CreateComponent implements OnInit  {
  
  isOpen:Boolean = false; // AJOUTER UN NOUVEAU PROJET SI BOOLEAN EST A TRUE 
  openMenus: {[key: string]: boolean} = {};
  linkForm!: FormGroup; // POUR FAIRE GERER LA FORMULAIRE 
  urlDatas: urlItem[] = [];  // LES DONNEES RECUPER DEPOUS LE BACKEND POUR POUR TOUT LES URLS
  linkError:boolean = false; 

  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  constructor(private apiService:ApiService, private fb:FormBuilder){}

  // Suprimer un url
  delete(unique_code:string):void{
      this.apiService.deleteLink(unique_code).subscribe({
        next: response=>{
          // console.log(response, 'success');
          // this.urlDatas = this.urlDatas.filter(item=> unique_code !== unique_code)
          
          const index = this.urlDatas.findIndex(item=> item.unique_code  === unique_code);
          if(index !== -1){
          
              this.urlDatas.splice(index, 1);
             
              const dataChart = this.urlDatas
              const linkName = dataChart.map((item) => item.link_name);
              const clickData = dataChart.map((item)=> item.clicks);

              this.updateChartData(linkName, clickData);
          };
          
        },
        error: erro=>{
          // console.error('erreur', erro)
        }
      })
  }


  // Récupere les données d'URL
  getUrls():void {

    this.apiService.getUrlData().subscribe(
     {
      next: (data:urlData) =>{
        this.urlDatas = data.data;
        // console.log(this.urlDatas)
      // After I change email by the link name 
      const linkName = this.urlDatas.map((urlData)=> urlData.link_name);
      const clickData = this.urlDatas.map((urlData)=>urlData.clicks);
      // console.log(clickData);
      this.updateChartData(clickData, linkName);
     
      },
      error: (erro)=>{
        // console.log('error', erro);
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
    link_name: ['',[Validators.required ]],
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
    // console.log("********************", labelsData);
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
        link_name: this.linkForm.get('link_name')?.value,
        url: this.linkForm.get('url')?.value
      };

      this.apiService.addLink(data).subscribe({
        next: (response:url) =>{
          // console.log('success',response);

          // Ajouter un link a la liste 
           this.urlDatas.push(response.data)
          // // Mettre ajour les données
          //  this.refreshDiv = false
          
          // setTimeout(()=> this.refreshDiv = true, 0) // Fonction pour forcer le charger de la page

          this.isOpen = !this.isOpen // pour faire disparaitre la formulaire
          this.linkError = false;  // pour suprimer le message d'erreur lors de la premiere tatantive
          // Suprimer l'element du formulaire apres l'envoyer
          this.linkForm.reset()
        },
        error: erro=>{
          // console.error('error', erro)
          this.linkError = !this.linkError
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

    // Fonction pour copier du text

    copyText(text:string){
     

      if(text){
        navigator.clipboard.writeText(text).then(()=>{
          
        }).catch((errr)=>{
         
        })
      }
    }
   
}
