import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilListaComponent} from './perfil-lista/perfil-lista.component';
import { PerfilFormularioComponent } from '../perfil/perfil-formulario/perfil-formulario.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilListaComponent    
  },
  {
    path: 'form',
    component: PerfilFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }

