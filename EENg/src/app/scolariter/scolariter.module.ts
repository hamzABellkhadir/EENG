import {CommonModule} from "@angular/common";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule, MatTableModule, MatTabsModule,
  MatToolbarModule
} from "@angular/material";
import {RouterModule} from "@angular/router";
import {etudiantservice} from "../../services/serve";
import {NotificationService} from "../etudiant/serviceEtudiant/Notification";
import {MaterialModule} from "../material/material.module";
import {ScolariterRoutingModule} from "./scolariter-routing.module";
import { MainNavComponent } from './main-nav/main-nav.component';
import { AttScolarTabComponent } from './att-scolar-tab/att-scolar-tab.component';
import { ReleveNoteTabComponent } from './releve-note-tab/releve-note-tab.component';
import { DmdDiplomeTabComponent } from './dmd-diplome-tab/dmd-diplome-tab.component';
import { DmdStageTabComponent } from './dmd-stage-tab/dmd-stage-tab.component';
import { ConvStageTabComponent } from './conv-stage-tab/conv-stage-tab.component';
import {ScolariterComponent} from "./scolariter.component";
import { TousDmdAttComponent } from './att-scolar-tab/tous-dmd-att/tous-dmd-att.component';
import { AccepteAttComponent } from './att-scolar-tab/accepte-att/accepte-att.component';
import { RefuseAttComponent } from './att-scolar-tab/refuse-att/refuse-att.component';
import { TousDmdCdsComponent } from './conv-stage-tab/tous-dmd-cds/tous-dmd-cds.component';
import { CdsRefuseComponent } from './conv-stage-tab/cds-refuse/cds-refuse.component';
import { CdsAccepteComponent } from './conv-stage-tab/cds-accepte/cds-accepte.component';
import { DddAccepteComponent } from './dmd-diplome-tab/ddd-accepte/ddd-accepte.component';
import { DddRefuseComponent } from './dmd-diplome-tab/ddd-refuse/ddd-refuse.component';
import { ToutDmdDddComponent } from './dmd-diplome-tab/tout-dmd-ddd/tout-dmd-ddd.component';
import { ToutDmdDdsComponent } from './dmd-stage-tab/tout-dmd-dds/tout-dmd-dds.component';
import { DdsAccepteComponent } from './dmd-stage-tab/dds-accepte/dds-accepte.component';
import { DdsRefuseComponent } from './dmd-stage-tab/dds-refuse/dds-refuse.component';
import { ToutDmdRdnComponent } from './releve-note-tab/tout-dmd-rdn/tout-dmd-rdn.component';
import { RdnAccepteComponent } from './releve-note-tab/rdn-accepte/rdn-accepte.component';
import { RdnRefuseComponent } from './releve-note-tab/rdn-refuse/rdn-refuse.component';
import { ProfileScolariteComponent } from './profile-scolarite/profile-scolarite.component';
import {DocumentScoService} from "./service_sco/document-sco.service";
import { PopupAccepteComponent } from './popup-accepte/popup-accepte.component';
import { PopupRefuseComponent } from './popup-refuse/popup-refuse.component';
import {Formdoc} from "./service_sco/formdoc";
import { AttModuleComponent } from './att-scolar-tab/tous-dmd-att/att-module/att-module.component';
import { CdsModuleComponent } from './conv-stage-tab/tous-dmd-cds/cds-module/cds-module.component';
import { DdsModuleComponent } from './dmd-stage-tab/tout-dmd-dds/dds-module/dds-module.component';

//----------------------------------------------------------------



@NgModule({
  imports: [
    ScolariterRoutingModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MaterialModule

  ],
  declarations: [MainNavComponent, AttScolarTabComponent, ReleveNoteTabComponent,
    DmdDiplomeTabComponent, DmdStageTabComponent,
    ConvStageTabComponent,ScolariterComponent,

    TousDmdAttComponent, AccepteAttComponent, RefuseAttComponent,
    TousDmdCdsComponent, CdsAccepteComponent, CdsRefuseComponent,
    ToutDmdDddComponent, DddAccepteComponent, DddRefuseComponent,
    ToutDmdDdsComponent, DdsAccepteComponent, DdsRefuseComponent,
    ToutDmdRdnComponent, RdnAccepteComponent, RdnRefuseComponent, ProfileScolariteComponent, PopupAccepteComponent,
    PopupRefuseComponent, AttModuleComponent, CdsModuleComponent, DdsModuleComponent, ],
  exports: [AttModuleComponent],
  providers: [DocumentScoService,Formdoc,NotificationService,etudiantservice],

})
export class ScolariterModule {
}

