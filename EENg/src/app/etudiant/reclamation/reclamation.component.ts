import { Component, OnInit } from '@angular/core';
import {etudiantservice} from "../../../services/serve";
import {DocumentFormserve} from "../serviceEtudiant/DocumentForm";

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  constructor(public serviceDoc : DocumentFormserve ,public etudserve:etudiantservice) { }

  ngOnInit() {
    this.etudserve.IsUserLogedOut();
  }

  onClear(){
    this.serviceDoc.initialisation_reclamation();
  }

  ajouter_recl(){
    this.serviceDoc.ajouter_reclamation(this.serviceDoc.formreclamation.value);
    this.onClear();
  }
}
