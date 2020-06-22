import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Login } from './login.interface'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getLogin() : Observable<any>{
    return this.http.get('https://localhost:5002/api/logins/1/100');
  }

  postLogin(login: Login) : Observable<Login>
  {
    return this.http.post<Login>('https://localhost:5002/api/logins', login);
  }

  deleteLogin(id: number) : Observable<Login>
  {
    return this.http.delete<Login>('https://localhost:5002/api/logins/'+id);

  }
}
