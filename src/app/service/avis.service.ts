import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { serverResponse1, AvisModelServer } from '../models/avis.model';
@Injectable({
  providedIn: 'root'
})
export class AvisService {
SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) {
  }
get2(email: String): Observable<serverResponse1> {
    return this.http.get<serverResponse1>(this.SERVER_URL + '/avis/r/' + email);
  }
  comment(comment: String, pseudo: String, email: String): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(this.SERVER_URL + '/avis/n/' + comment + '/' + pseudo + '/' + email, onmessage);
  }
}
