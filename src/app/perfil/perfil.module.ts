import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilListaComponent } from './perfil-lista/perfil-lista.component';
import { PerfilFormularioComponent } from './perfil-formulario/perfil-formulario.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PerfilListaComponent, PerfilFormularioComponent],
  imports: [
    CommonModule,
    FormsModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
