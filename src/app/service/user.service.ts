import {Injectable} from '@angular/core';
import {AuthService, GoogleLoginProvider, SocialUser} from 'angularx-social-login';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private SERVER_URL = environment.SERVER_URL;
  private currentUserSubject: BehaviorSubject<ResponseModel>;
  public currentUser: Observable<ResponseModel>;

  constructor(private authService: AuthService,
              private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<ResponseModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }



  registerUser(formData: any): Observable<{ message: string }> {
    const {fname, lname, date, profile, typev, email, username, password} = formData;
    console.log(formData);
    return this.httpClient.post<{ message: string }>(`${this.SERVER_URL}/auth/register`, {
    fname,
    lname,
    date,
    profile,
    typev,
    email,
    username,
    password
    });
  }
  public get currentUserValue(): ResponseModel {
    return this.currentUserSubject.value;
  }

  Login1(body): Observable<any> {
    return this.httpClient.post(`${this.SERVER_URL}/auth/log`, body);
  }
  requestReset(body): Observable<any> {
    return this.httpClient.post(`${this.SERVER_URL}/auth/verif`, body);
  }
newpass(body): Observable<any> {
  return this.httpClient.post(`${this.SERVER_URL}/auth/v/`, body);
  }
  getA(numberOfResults = 10): Observable<serverResponse1> {
    return this.httpClient.get<serverResponse1>(this.SERVER_URL + '/auth', {
      params: {
        limit: numberOfResults.toString()
      }
    });
  }
}
export interface ResponseModel {
  auth: boolean;
    fname: string;
  lname: string;
   date: string;
    profile: string;
      typev: string;
     mail: string;
  username: string;
password: string;
  pass: string;
  userId: number;
}

// tslint:disable-next-line:class-name
export interface serverResponse1 {
  count: number;
  users: ResponseModel[];
}
