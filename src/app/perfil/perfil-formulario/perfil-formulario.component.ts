import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Perfil } from '../perfil.interface';
import { PerfilService } from '../perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-formulario',
  templateUrl: './perfil-formulario.component.html',
  styleUrls: ['./perfil-formulario.component.css']
})
export class PerfilFormularioComponent implements OnInit {
 
  perfil: Perfil =
  {
    id: Math.floor(1000000000*Math.random()),
    descricao: ''
  }

  constructor(private service: PerfilService, private router: Router) { }

  ngOnInit(): void {
  }

  salvar(perfil: Perfil): void{
      this.service.postPerfil(perfil).subscribe(
        data=>{
          this.router.navigate(['/perfis'])
        },
        error=>
        {

        }
      );
  }
}
