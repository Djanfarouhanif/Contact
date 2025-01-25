import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://votre-api.com/endpoint' // A Remplacer par le vrai api URL

  constructor(private http:HttpClient) { }


  // Fonction pour enregister les utilisateur
  postData(data:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Type de données a envoyer 
    });

    return this.http.post(this.apiUrl, data, {headers}).pipe(
      catchError(error=>{
        console.error('Erreur:', error)
        return throwError(()=>error)
      })
    );
  }
}
