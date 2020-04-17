import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FrstPageComponent} from "./frst-page/frst-page.component";
import {LoginPrincipComponent} from "./login-princip.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path:'',
    component: LoginPrincipComponent

  },
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class LoginPrincipRoutingModule {
}

