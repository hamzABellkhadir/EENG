import { Component, OnInit } from '@angular/core';
import {etudiantservice} from "../../../services/serve";

@Component({
  selector: 'app-releve-note-tab',
  templateUrl: './releve-note-tab.component.html',
  styleUrls: ['./releve-note-tab.component.css']
})
export class ReleveNoteTabComponent implements OnInit {

  constructor(public etudserve:etudiantservice) { }

  ngOnInit() {
    this.etudserve.IsAdminLogedOut();
  }

}
