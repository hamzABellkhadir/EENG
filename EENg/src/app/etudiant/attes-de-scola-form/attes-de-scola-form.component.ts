import {DatePipe, formatDate} from "@angular/common";
import { Component, OnInit } from '@angular/core';
import {ADSRDN} from "../../../module/ADS-RDN";
import {etudiant} from "../../../module/class-etudiant";
import {etudiantservice} from "../../../services/serve";
import {DocumentFormserve} from "../serviceEtudiant/DocumentForm";
import {NotificationService} from "../serviceEtudiant/Notification";

@Component({
  selector: 'app-attes-de-scola-form',
  templateUrl: './attes-de-scola-form.component.html',
  styleUrls: ['./attes-de-scola-form.component.css']
})
export class AttesDeScolaFormComponent implements OnInit {



  constructor( private service_att : DocumentFormserve,
               private notificationService: NotificationService,public etudserve:etudiantservice) { }

  ajouter_att(){
    this.service_att.ajouter_Attestationsco(this.service_att.formAttestationsco.value);
    this.onClear();

  }
  onClear(){
    this.service_att.initialisation_attsco();
  }

  ngOnInit() {
    this.etudserve.IsUserLogedOut();
  }

}
