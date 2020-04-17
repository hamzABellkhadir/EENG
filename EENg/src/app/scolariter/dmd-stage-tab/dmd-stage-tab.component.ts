import { Component, OnInit } from '@angular/core';
import {etudiantservice} from "../../../services/serve";

@Component({
  selector: 'app-dmd-stage-tab',
  templateUrl: './dmd-stage-tab.component.html',
  styleUrls: ['./dmd-stage-tab.component.css']
})
export class DmdStageTabComponent implements OnInit {

  constructor(public etudserve:etudiantservice) { }

  ngOnInit() {
    this.etudserve.IsAdminLogedOut();
  }

}
