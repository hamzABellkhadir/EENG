import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router"
import {AttesDeScolaFormComponent} from "./attes-de-scola-form/attes-de-scola-form.component";
import {ConventionDeStageComponent} from "./convention-de-stage/convention-de-stage.component";
import {DemandeDeStageComponent} from "./demande-de-stage/demande-de-stage.component";
import {DemandeDiplomeComponent} from "./demande-diplome/demande-diplome.component";
import {EtudiantComponent} from "./etudiant.component";
import {ProfilComponent} from "./profil/profil.component";
import {ReclamationComponent} from "./reclamation/reclamation.component";
import {ReleveDeNoteComponent} from "./releve-de-note/releve-de-note.component";
import {TousLesDemandesComponent} from "./tous-les-demandes/tous-les-demandes.component";



const routes: Routes = [
  {
    path:'main',
    component:EtudiantComponent,
    children: [
      { path: 'ADS', component: AttesDeScolaFormComponent },
      { path: 'p', component: ProfilComponent },
      { path: 'RDN', component: ReleveDeNoteComponent },
      { path: 'TMD', component: TousLesDemandesComponent},
      { path: 'damandeStage', component: DemandeDeStageComponent},
      { path: 'conventionStage', component: ConventionDeStageComponent},
      { path: 'demandeDiplome', component: DemandeDiplomeComponent},
      { path: 'reclamation', component: ReclamationComponent},
     ]
  }
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class EtudiantRoutingModule {
}

