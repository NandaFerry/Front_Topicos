import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnotacaoRoutingModule } from './anotacao-routing.module';
import { AnotacaoListaComponent } from './anotacao-lista/anotacao-lista.component';
import { AnotacaoFormularioComponent } from './anotacao-formulario/anotacao-formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AnotacaoListaComponent, AnotacaoFormularioComponent],
  imports: [
    CommonModule,
    FormsModule,
    AnotacaoRoutingModule
  ]
})
export class AnotacaoModule { }
