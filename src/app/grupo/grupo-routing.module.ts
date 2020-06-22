import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoListaComponent} from './grupo-lista/grupo-lista.component';
import { GrupoFormularioComponent } from './grupo-formulario/grupo-formulario.component';

const routes: Routes = [
  {
    path: '',
    component: GrupoListaComponent    
  },
  {
    path: 'forms',
    component: GrupoFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoRoutingModule { }
