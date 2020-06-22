import { Component, OnInit } from '@angular/core';

import { Login } from '../login.interface';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-formulario',
  templateUrl: './login-formulario.component.html',
  styleUrls: ['./login-formulario.component.css']
})
export class LoginFormularioComponent implements OnInit {

  login: Login =
  {
    id: Math.floor(1000000000*Math.random()),
    id_pessoa: 0,
    id_perfil: 0,
    password: '',
    user: ''
  }

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  salvar(login: Login): void{
    this.service.postLogin(login).subscribe(
      data=>{
        this.router.navigate(['/logins'])
      },
      error=>
      {

      }
    );
  }

}
