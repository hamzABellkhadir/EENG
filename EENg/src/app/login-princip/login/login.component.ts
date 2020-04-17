import {HttpClient} from "@angular/common/http";
import {collectExternalReferences} from "@angular/compiler";
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {etudiantservice} from "../../../services/serve";
import {FormLoginserve} from "../ServiceLogin/fromLogin";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(private service_login : FormLoginserve) { }

  ngOnInit() {
    this.service_login.initialisation();
  }

  hide=true;
  onSubmit(dataForm){

    this.service_login.login(this.service_login.formLogin.value);
    this.service_login.initialisation();

  }





}
