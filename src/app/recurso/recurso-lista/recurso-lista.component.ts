import { Component, OnInit } from '@angular/core';

import { Recurso } from '../recurso.interface';
import { Observable } from 'rxjs';
import { RecursoService } from '../recurso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recurso-lista',
  templateUrl: './recurso-lista.component.html',
  styleUrls: ['./recurso-lista.component.css']
})
export class RecursoListaComponent implements OnInit {

  recursos : Observable<Recurso>;

  constructor(private servico: RecursoService, private router: Router) { }

  ngOnInit(): void {
    this.recursos = this.servico.getRecurso();
  }

  apagar(id: number){
    this.servico.deleteRecurso(id).subscribe(
      data=>{
        this.router.navigate(['/recursos'])
      },
      error=>
      {

      }
    );
  }

}
