import { Component, OnInit } from '@angular/core';

import { Grupo } from '../grupo.interface';
import { Observable } from 'rxjs';
import { GrupoService } from '../grupo.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-grupo-lista',
  templateUrl: './grupo-lista.component.html',
  styleUrls: ['./grupo-lista.component.css']
})
export class GrupoListaComponent implements OnInit {

  grupos : Observable<Grupo>;

  constructor(private servico: GrupoService, private router: Router) { }

  ngOnInit(): void {
    this.grupos = this.servico.getGrupo();
  }
  apagar(id: number){
    this.servico.deleteGrupo(id).subscribe(
      data=>{
        this.router.navigate(['/grupos'])
      },
      error=>
      {

      }
    );
  }

}
