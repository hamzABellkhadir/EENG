import { Component, OnInit } from '@angular/core';
import {etudiantservice} from "../../../services/serve";
import {DocumentFormserve} from "../serviceEtudiant/DocumentForm";

@Component({
  selector: 'app-demande-diplome',
  templateUrl: './demande-diplome.component.html',
  styleUrls: ['./demande-diplome.component.css']
})
export class DemandeDiplomeComponent implements OnInit {

  constructor(private serviceDoc : DocumentFormserve,public etudserve:etudiantservice) { }

  ngOnInit() {
    this.etudserve.IsUserLogedOut();
  }

  ajouter_deamandedpl(){
    this.serviceDoc.ajouter_demandeDiplome(this.serviceDoc.formdiplome.value);
    this.onClear();
  }
  onClear(){
    this.serviceDoc.initialisation_ddiplome();
  }
}
