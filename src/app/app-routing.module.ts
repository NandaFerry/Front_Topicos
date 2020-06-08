import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path:'pessoas',
    loadChildren: () => import('./pessoa/pessoa.module').then(p=>p.PessoaModule)
  },
  {
    path:'anotacoes',
    loadChildren: () => import('./anotacao/anotacao.module').then(a=>a.AnotacaoModule)
  },
  {
    path:'grupos',
    loadChildren: () => import('./grupo/grupo.module').then(g=>g.GrupoModule)
  },
  {
    path:'logins',
    loadChildren: () => import('./login/login.module').then(l=>l.LoginModule)
  },
  {
    path:'perfis',
    loadChildren: () => import('./perfil/perfil.module').then(pe=>pe.PerfilModule)
  },
  {
    path:'recursos',
    loadChildren: () => import('./recurso/recurso.module').then(r=>r.RecursoModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
