import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {etudiantservice} from "../../../services/serve";

@Component({
  selector: 'app-att-scolar-tab',
  templateUrl: './att-scolar-tab.component.html',
  styleUrls: ['./att-scolar-tab.component.css']
})
export class AttScolarTabComponent implements OnInit {

  constructor(public etudserve:etudiantservice ) { }

  ngOnInit() {
    this.etudserve.IsAdminLogedOut();
  }

}
