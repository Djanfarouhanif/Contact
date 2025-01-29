import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { loginData, signUpData } from './data';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl =[ 'http://127.0.0.1:8000/user/signup/', 'http://127.0.0.1:8000/clicks/get_url/', 'http://127.0.0.1:8000/clicks/create/', 'http://127.0.0.1:8000/login/login/'] // A Remplacer par le vrai api URL

  constructor(private http:HttpClient) { }

  // Fonction pour ajouter un nouveau lien
  addLink(data:any){
    const headers = new HttpHeaders({
     'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl[2], data, {headers}).pipe(
      catchError(error=>{
        console.error("erreur", error);
        return throwError(()=>error)
      })
    );
  };

// Récupurer les url crée
getUrlData():Observable<any[]>{
  // Récupére token avant 
  const token = localStorage.getItem('token');
  console.log("*************")
  console.log(token)
  // Hearders pour envoyer les requeste
  const headers = new HttpHeaders({
    'Content-Type': 'application/json', // Type de données a envoyer
    'Authorization': `Token ${token}`
   

  });

  return this.http.get<any[]>(this.apiUrl[1], {headers})
}

// Fonction pour loger l'utilisateur
loginUser(data:any):Observable<loginData>{
  const headers = new HttpHeaders({
    'Content-Type': 'application/json', // Type de données a envoyer 
  });

  return this.http.post<loginData>(this.apiUrl[3], data ,  {headers})
}

  // Fonction pour enregister les utilisateur
  signUp(data:any):Observable<signUpData>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Type de données a envoyer 
    });

    return this.http.post<signUpData>(this.apiUrl[0], data, {headers}).pipe(
      catchError(error=>{
        console.error('Erreur:', error)
        return throwError(()=>error)
      })
    );
  }
}
