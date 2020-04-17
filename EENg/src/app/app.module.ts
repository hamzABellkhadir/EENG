import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DetailComponent} from "./etudiant/detail/detail.component";
import {EtudiantModule} from "./etudiant/etudiant.module";
import {LoginPrincipModule} from "./login-princip/login-princip.module";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule ,MatCardModule , MatDialogModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MaterialModule} from "./material/material.module";
import {PopupAccepteComponent} from "./scolariter/popup-accepte/popup-accepte.component";
import {PopupRefuseComponent} from "./scolariter/popup-refuse/popup-refuse.component";
import {ScolariterModule} from "./scolariter/scolariter.module";





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FontAwesomeModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ModalModule.forRoot(),


    MaterialModule,

    ScolariterModule,
    EtudiantModule,
    LoginPrincipModule
  ],
  entryComponents : [DetailComponent , PopupRefuseComponent , PopupAccepteComponent],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
