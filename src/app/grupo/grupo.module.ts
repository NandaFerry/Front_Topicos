import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoListaComponent } from './grupo-lista/grupo-lista.component';
import { GrupoFormularioComponent } from './grupo-formulario/grupo-formulario.component';


@NgModule({
  declarations: [GrupoListaComponent, GrupoFormularioComponent],
  imports: [
    CommonModule,
    GrupoRoutingModule
  ]
})
export class GrupoModule { }
