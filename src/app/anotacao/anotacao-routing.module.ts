import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnotacaoListaComponent} from './anotacao-lista/anotacao-lista.component';
import { AnotacaoFormularioComponent } from './anotacao-formulario/anotacao-formulario.component';

const routes: Routes = [
  {
    path: '',
    component: AnotacaoListaComponent    
  },
  {
    path: 'form',
    component: AnotacaoFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnotacaoRoutingModule { }
