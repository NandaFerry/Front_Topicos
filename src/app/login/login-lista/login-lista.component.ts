import { Component, OnInit } from '@angular/core';

import { Login } from '../login.interface';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-lista',
  templateUrl: './login-lista.component.html',
  styleUrls: ['./login-lista.component.css']
})
export class LoginListaComponent implements OnInit {

  logins : Observable<Login>;

  constructor(private servico: LoginService) { }

  ngOnInit(): void {
    this.logins = this.servico.getLogin();
  }

}
