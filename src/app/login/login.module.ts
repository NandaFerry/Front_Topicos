import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginListaComponent } from './login-lista/login-lista.component';
import { LoginFormularioComponent } from './login-formulario/login-formulario.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginListaComponent, LoginFormularioComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
