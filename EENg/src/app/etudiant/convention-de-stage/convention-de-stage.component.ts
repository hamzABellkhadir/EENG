import { Component, OnInit } from '@angular/core';
import {etudiantservice} from "../../../services/serve";
import {DocumentFormserve} from "../serviceEtudiant/DocumentForm";
import {NotificationService} from "../serviceEtudiant/Notification";

@Component({
  selector: 'app-convention-de-stage',
  templateUrl: './convention-de-stage.component.html',
  styleUrls: ['./convention-de-stage.component.css']
})
export class ConventionDeStageComponent implements OnInit {

  constructor(private serviceDoc : DocumentFormserve,
              private notificationService: NotificationService,public etudserve:etudiantservice) { }

  ngOnInit() {
    this.etudserve.IsUserLogedOut();
  }

  onClear(){
    this.serviceDoc.initialisation_cnv();
  }

  ajouter_cenvention(){
    this.serviceDoc.ajouter_cenventionstg(this.serviceDoc.form.value);
    this.onClear();
  }
}
