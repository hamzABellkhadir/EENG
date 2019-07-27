import {LayoutModule} from "@angular/cdk/layout";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatButtonModule, MatCardModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatSidenavModule, MatSort, MatTableModule,
  MatToolbarModule, MatTreeModule
} from "@angular/material";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {etudiantservice} from "../../services/serve";
import {MaterialModule} from "../material/material.module";
import {AttesDeScolaFormComponent} from "./attes-de-scola-form/attes-de-scola-form.component";
import {DocumentFormserve} from "./serviceEtudiant/DocumentForm";
import {DocumentseviceService} from "./serviceEtudiant/documentsevice.service";
import {EtudiantRoutingModule} from "./etudiant-routing.module";
import {EtudiantComponent} from "./etudiant.component";
import {MainNavComponent} from "./main-nav/main-nav.component";
import {ProfilComponent} from "./profil/profil.component";
import {ReleveDeNoteComponent} from "./releve-de-note/releve-de-note.component";
import {NotificationService} from "./serviceEtudiant/Notification";
import { TousLesDemandesComponent } from './tous-les-demandes/tous-les-demandes.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DemandeDeStageComponent } from './demande-de-stage/demande-de-stage.component';
import { ConventionDeStageComponent } from './convention-de-stage/convention-de-stage.component';
import { DemandeDiplomeComponent } from './demande-diplome/demande-diplome.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    EtudiantRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule,
    MatTreeModule,
    NgbModule,
    MatTableModule,
    MatSnackBarModule
  ],
  declarations: [
    ReleveDeNoteComponent,
    ProfilComponent,
    AttesDeScolaFormComponent,
    MainNavComponent,
    EtudiantComponent,
    TousLesDemandesComponent,
    DemandeDeStageComponent,
    ConventionDeStageComponent,
    DemandeDiplomeComponent,
    ReclamationComponent,
    DetailComponent
  ],
  providers: [etudiantservice,DocumentseviceService,
    DocumentFormserve,NotificationService, TousLesDemandesComponent],
})
export class EtudiantModule {
}

