import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginListaComponent} from './login-lista/login-lista.component';
import { LoginFormularioComponent } from './login-formulario/login-formulario.component';

const routes: Routes = [
  {
    path: '',
    component: LoginListaComponent    
  },
  {
    path: 'form',
    component: LoginFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
