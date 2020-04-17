import {formatDate} from "@angular/common";
import { Component, OnInit } from '@angular/core';
import {ADSRDN} from "../../../module/ADS-RDN";
import {etudiantservice} from "../../../services/serve";
import {DocumentFormserve} from "../serviceEtudiant/DocumentForm";
import {DocumentseviceService} from "../serviceEtudiant/documentsevice.service";
import {NotificationService} from "../serviceEtudiant/Notification";

@Component({
  selector: 'app-releve-de-note',
  templateUrl: './releve-de-note.component.html',
  styleUrls: ['./releve-de-note.component.css']
})
export class ReleveDeNoteComponent implements OnInit {

  relveN :ADSRDN = new ADSRDN();

  format = 'dd/MM/yyyy';
  myDate = Date.now();
  locale = 'en-US';
  formattedDate = formatDate(this.myDate, this.format,this.locale);

  constructor(private serviceDoc : DocumentFormserve,
              private notificationService: NotificationService,public etudserve:etudiantservice) { }

  ngOnInit() {
    this.etudserve.IsUserLogedOut();
  }

  ajouter_relver(){
    this.serviceDoc.ajouter_relveNote(this.serviceDoc.formRelveNote.value);
    this.onClear();
  }
  onClear(){
    this.serviceDoc.initialisation_relverN();
  }
  installation(){

  }
}
