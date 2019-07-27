import {LayoutModule} from "@angular/cdk/layout";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatButtonModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {etudiantservice} from "../../services/serve";
import {FrstPageComponent} from "./frst-page/frst-page.component";
import {LoginPrincipRoutingModule} from "./login-princip-routing.module";
import {LoginPrincipComponent} from "./login-princip.component";
import {LoginComponent} from "./login/login.component";
import {FormLoginserve} from "./ServiceLogin/fromLogin";
import {NotificationUService} from "./ServiceLogin/NotificationU";



@NgModule({
  imports: [
    LoginPrincipRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,


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
    FontAwesomeModule,
    HttpClientModule,
    RouterModule


  ],

  declarations: [
    LoginComponent,
    FrstPageComponent,
    LoginPrincipComponent
  ],
  providers: [etudiantservice,FormLoginserve,NotificationUService],
})
export class LoginPrincipModule {
}

