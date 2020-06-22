import { Component, OnInit } from '@angular/core';

import { Perfil } from '../perfil.interface';
import { Observable } from 'rxjs';
import { PerfilService } from '../perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-lista',
  templateUrl: './perfil-lista.component.html',
  styleUrls: ['./perfil-lista.component.css']
})
export class PerfilListaComponent implements OnInit {

  perfis : Observable<Perfil>;

  constructor(private servico: PerfilService, private router: Router) { }

  ngOnInit(): void {
    this.perfis = this.servico.getPerfil();
  }
  apagar(id: number){
    this.servico.deletePerfil(id).subscribe(
      data=>{
        this.router.navigate(['/perfis'])
      },
      error=>
      {

      }
    );
  }

}
