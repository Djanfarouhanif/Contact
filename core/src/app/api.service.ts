import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl =[ 'http://127.0.0.1:8000/user/'] // A Remplacer par le vrai api URL

  constructor(private http:HttpClient) { }


  // Fonction pour enregister les utilisateur
  postData(data:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Type de données a envoyer 
    });

    return this.http.post(this.apiUrl[0], data, {headers}).pipe(
      catchError(error=>{
        console.error('Erreur:', error)
        return throwError(()=>error)
      })
    );
  }
}
