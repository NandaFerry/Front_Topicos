import { Component, OnInit } from '@angular/core';

import { Login } from '../login.interface';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-lista',
  templateUrl: './login-lista.component.html',
  styleUrls: ['./login-lista.component.css']
})
export class LoginListaComponent implements OnInit {

  logins : Observable<Login>;

  constructor(private servico: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.logins = this.servico.getLogin();
  }
  apagar(id: number){
    this.servico.deleteLogin(id).subscribe(
      data=>{
        this.router.navigate(['/logins'])
      },
      error=>
      {

      }
    );
  }

}
