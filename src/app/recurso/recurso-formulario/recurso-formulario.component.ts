import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Recurso } from '../recurso.interface';
import { RecursoService } from '../recurso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recurso-formulario',
  templateUrl: './recurso-formulario.component.html',
  styleUrls: ['./recurso-formulario.component.css']
})
export class RecursoFormularioComponent implements OnInit {

  recurso: Recurso =
  {
    id: Math.floor(1000000000*Math.random()),
    descricao: ''
  }

  constructor(private service: RecursoService, private router: Router) { }

  ngOnInit(): void {
  }
  salvar(recurso: Recurso): void{
    this.service.postRecurso(recurso).subscribe(
      data=>{
        this.router.navigate(['/recursos'])
      },
      error=>
      {

      }
    );
}

}
