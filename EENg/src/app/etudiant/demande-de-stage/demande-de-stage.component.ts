import { Component, OnInit } from '@angular/core';
import {etudiantservice} from "../../../services/serve";
import {DocumentFormserve} from "../serviceEtudiant/DocumentForm";
import {NotificationService} from "../serviceEtudiant/Notification";

@Component({
  selector: 'app-demande-de-stage',
  templateUrl: './demande-de-stage.component.html',
  styleUrls: ['./demande-de-stage.component.css']
})
export class DemandeDeStageComponent implements OnInit {

  constructor(private service_att : DocumentFormserve,
              private notificationService: NotificationService,public etudserve:etudiantservice) { }

  ngOnInit() {
    this.etudserve.IsUserLogedOut();
  }

  ajouter_att(){
    this.service_att.ajouter_demandeStage(this.service_att.formAttestationsco.value);
    this.onClear();

  }
  onClear(){
    this.service_att.initialisation_attsco();
  }

}
