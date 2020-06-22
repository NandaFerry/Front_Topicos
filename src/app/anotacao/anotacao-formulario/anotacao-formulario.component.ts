import { Component, OnInit } from '@angular/core';

import { AnotacaoService } from '../anotacao.service';
import { Router } from '@angular/router';
import { Anotacao } from '../anotacao.interface';

@Component({
  selector: 'app-anotacao-formulario',
  templateUrl: './anotacao-formulario.component.html',
  styleUrls: ['./anotacao-formulario.component.css']
})
export class AnotacaoFormularioComponent implements OnInit {

  anotacao: Anotacao =
  {
    id_pessoa_grupo: Math.floor(1000000000*Math.random()),
    obs: '',
    data: new Date('2015-03-04T00:00:00.000Z')
  }

  constructor(private service: AnotacaoService, private router: Router) { }
 
  ngOnInit(): void {
  }

  salvar(anotacao: Anotacao): void{
    this.service.postAnotacao(anotacao).subscribe(
      data=>{
        this.router.navigate(['/anotacoes'])
      },
      error=>
      {

      }
    );
  }

}
