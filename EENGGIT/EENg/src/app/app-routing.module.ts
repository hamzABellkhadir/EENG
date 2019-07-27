import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'login',
    loadChildren: 'app/login-princip/login-princip.module#LoginPrincipModule'
  },
  {
    path:'etudiant',
    loadChildren: 'app/etudiant/etudiant.module#EtudiantModule'
  },
  {
    path:'scolariter',
    loadChildren: 'app/scolariter/scolariter.module#ScolariterModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
