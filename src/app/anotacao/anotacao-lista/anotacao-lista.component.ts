import { Component, OnInit } from '@angular/core';

import { Anotacao } from '../anotacao.interface';
import { Observable } from 'rxjs';
import { AnotacaoService } from '../anotacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anotacao-lista',
  templateUrl: './anotacao-lista.component.html',
  styleUrls: ['./anotacao-lista.component.css']
})
export class AnotacaoListaComponent implements OnInit {

  anotacoes : Observable<Anotacao>;

  constructor(private servico: AnotacaoService, private router: Router) { }

  ngOnInit(): void {
    this.anotacoes = this.servico.getAnotacao();
  }
  
  apagar(id: number){
    this.servico.deleteAnotacao(id).subscribe(
      data=>{
        this.router.navigate(['/anotacoes'])
      },
      error=>
      {

      }
    );
  }

}
