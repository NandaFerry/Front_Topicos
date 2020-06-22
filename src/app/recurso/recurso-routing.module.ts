import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecursoListaComponent} from './recurso-lista/recurso-lista.component';
import { RecursoFormularioComponent } from './recurso-formulario/recurso-formulario.component';

const routes: Routes = [
  {
    path: '',
    component: RecursoListaComponent    
  },
  {
    path: 'form',
    component: RecursoFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursoRoutingModule { }
