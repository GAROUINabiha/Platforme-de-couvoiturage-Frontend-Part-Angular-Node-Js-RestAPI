import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { TrajetModelServer, serverResponse } from 'src/app/models/trajet.model';
@Injectable({
  providedIn: 'root'
})
export class TrajetService {
SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) {
  }
  getAllTrajet(numberOfResults = 10): Observable<serverResponse> {
    return this.http.get<serverResponse>( this.SERVER_URL + '/trajet', {
      params: {
        limit: numberOfResults.toString()
      }
    });
      }

  /* GET SINGLE PRODUCT FROM SERVER*/
  getSingle(id: number): Observable<TrajetModelServer> {
    return this.http.get<TrajetModelServer>(this.SERVER_URL + '/trajet/' + id);
  }
 /* GET SINGLE PRODUCT FROM SERVER*/
  get1(vdepart: string, varrive: string, date: string): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.SERVER_URL + '/trajet/v/' + vdepart + '/' + varrive + '/' + date);
  }
get2(email: String): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.SERVER_URL + '/trajet/r/' + email);
  }
getn(): Observable<{nombre: number}> {
    return this.http.get<{nombre: number}>(this.SERVER_URL + '/trajet/count');
  }
  getn1(): Observable<{nombre: number}> {
    return this.http.get<{nombre: number}>(this.SERVER_URL + '/trajet/count2');
  }
  pub(formData: any): Observable<{ message: string }> {
    const {email, vdepart, varrive, date, heure, nbrep, tarif, checkArray} = formData;
    console.log(formData);
    return this.http.post<{ message: string }>(`${this.SERVER_URL}/trajet/new`, {
      email,
      vdepart,
      varrive,
      date,
      heure,
      nbrep,
      tarif,
      checkArray
    });
  }
}
