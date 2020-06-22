import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoListaComponent } from './grupo-lista/grupo-lista.component';
import { GrupoFormularioComponent } from './grupo-formulario/grupo-formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GrupoListaComponent, GrupoFormularioComponent],
  imports: [
    CommonModule,
    FormsModule,
    GrupoRoutingModule
  ]
})
export class GrupoModule { }
