import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursoRoutingModule } from './recurso-routing.module';
import { RecursoListaComponent } from './recurso-lista/recurso-lista.component';
import { FormsModule } from '@angular/forms';
import { RecursoFormularioComponent } from './recurso-formulario/recurso-formulario.component';

@NgModule({
  declarations: [RecursoListaComponent, RecursoFormularioComponent],
  imports: [
    CommonModule,
    FormsModule,
    RecursoRoutingModule
  ]
})
export class RecursoModule { }
 