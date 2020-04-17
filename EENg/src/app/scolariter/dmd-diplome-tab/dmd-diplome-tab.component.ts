import { Component, OnInit } from '@angular/core';
import {etudiantservice} from "../../../services/serve";

@Component({
  selector: 'app-dmd-diplome-tab',
  templateUrl: './dmd-diplome-tab.component.html',
  styleUrls: ['./dmd-diplome-tab.component.css']
})
export class DmdDiplomeTabComponent implements OnInit {

  constructor(public etudserve:etudiantservice) { }

  ngOnInit() {
    this.etudserve.IsAdminLogedOut();
  }

}
