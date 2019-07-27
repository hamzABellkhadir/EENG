import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {ProfilComponent} from "../etudiant/profil/profil.component";
import {ReclamationComponent} from "../etudiant/reclamation/reclamation.component";

import {TousLesDemandesComponent} from "../etudiant/tous-les-demandes/tous-les-demandes.component";
import {AccepteAttComponent} from "./att-scolar-tab/accepte-att/accepte-att.component";
import {AttScolarTabComponent} from "./att-scolar-tab/att-scolar-tab.component";
import {RefuseAttComponent} from "./att-scolar-tab/refuse-att/refuse-att.component";
import {TousDmdAttComponent} from "./att-scolar-tab/tous-dmd-att/tous-dmd-att.component";
import {CdsAccepteComponent} from "./conv-stage-tab/cds-accepte/cds-accepte.component";
import {CdsRefuseComponent} from "./conv-stage-tab/cds-refuse/cds-refuse.component";

import {ConvStageTabComponent} from "./conv-stage-tab/conv-stage-tab.component";
import {TousDmdCdsComponent} from "./conv-stage-tab/tous-dmd-cds/tous-dmd-cds.component";
import {DddAccepteComponent} from "./dmd-diplome-tab/ddd-accepte/ddd-accepte.component";
import {DddRefuseComponent} from "./dmd-diplome-tab/ddd-refuse/ddd-refuse.component";
import {DmdDiplomeTabComponent} from "./dmd-diplome-tab/dmd-diplome-tab.component";
import {ToutDmdDddComponent} from "./dmd-diplome-tab/tout-dmd-ddd/tout-dmd-ddd.component";
import {DdsAccepteComponent} from "./dmd-stage-tab/dds-accepte/dds-accepte.component";
import {DdsRefuseComponent} from "./dmd-stage-tab/dds-refuse/dds-refuse.component";
import {DmdStageTabComponent} from "./dmd-stage-tab/dmd-stage-tab.component";
import {ToutDmdDdsComponent} from "./dmd-stage-tab/tout-dmd-dds/tout-dmd-dds.component";
import {ProfileScolariteComponent} from "./profile-scolarite/profile-scolarite.component";
import {RdnAccepteComponent} from "./releve-note-tab/rdn-accepte/rdn-accepte.component";
import {RdnRefuseComponent} from "./releve-note-tab/rdn-refuse/rdn-refuse.component";
import {ReleveNoteTabComponent} from "./releve-note-tab/releve-note-tab.component";
import {ToutDmdRdnComponent} from "./releve-note-tab/tout-dmd-rdn/tout-dmd-rdn.component";
import {ScolariterComponent} from "./scolariter.component";

const routes: Routes = [
  {
    path:'scolarite',
    component:ScolariterComponent,
    children: [
      { path: 'AttestetionDescolarite', component: AttScolarTabComponent,
        children : [
          {path : 'tousLesAtt' , component : TousDmdAttComponent},
          {path : 'AttAccepte', component : AccepteAttComponent},
          {path : 'AttRefuse', component : RefuseAttComponent}
        ]
      },

      { path: 'profileScolarite', component: ProfileScolariteComponent },

      { path: 'releveDeNote', component: ReleveNoteTabComponent,
        children: [
              {path : 'tousLesrdn' , component : ToutDmdRdnComponent},
              {path : 'rdnAccepte', component : RdnAccepteComponent},
              {path : 'rdnRefuse', component : RdnRefuseComponent}
            ]
          } ,



      { path: 'demandeDeStage', component: DmdStageTabComponent,
        children: [
          {path : 'tousLesdds' , component : ToutDmdDdsComponent},
          {path : 'ddsAccepte', component : DdsAccepteComponent},
          {path : 'ddsRefuse', component : DdsRefuseComponent}
        ]},

      { path: 'conventionDeStage', component: ConvStageTabComponent,
        children: [
          {path : 'tousLescds' , component : TousDmdCdsComponent},
          {path : 'cdsAccepte', component : CdsAccepteComponent},
          {path : 'cdsRefuse', component : CdsRefuseComponent}
        ]},

      { path: 'demandeDuDiplome', component: DmdDiplomeTabComponent ,
        children: [
          {path : 'tousLesddd' , component : ToutDmdDddComponent},
          {path : 'dddAccepte', component : DddAccepteComponent},
          {path : 'dddRefuse', component : DddRefuseComponent}
        ]},
      { path: 'reclamation', component: ReclamationComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScolariterRoutingModule {
}

