import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {DocumentScoService} from "../service_sco/document-sco.service";
import {Formdoc} from "../service_sco/formdoc";

@Component({
  selector: 'app-popup-refuse',
  templateUrl: './popup-refuse.component.html',
  styleUrls: ['./popup-refuse.component.css']
})
export class PopupRefuseComponent implements OnInit {

  constructor(public docserve : DocumentScoService , public formservice :Formdoc,
              public dialogRef: MatDialogRef<PopupRefuseComponent>) { }

  ngOnInit() {
  }
  annuler(){
     //this.docserve.onClose();
    this.dialogRef.close();
  }
  x:any;


  update_doc(){
    this.x = localStorage.getItem("id_doc");
    let type = localStorage.getItem("typeDoc");

    if(type == "Attestation_Scolarite"){
      this.formservice.update_doc_refusee(this.formservice.formAttestationsco.value,"refusé",this.x);
    }else if(type == "ConventionStage") {
      this.formservice.update_doc_refusee(this.formservice.formAttestationsco.value, "refusé", this.x);
    }else if(type == "Demande_diplome") {
      this.formservice.update_doc_refusee(this.formservice.formAttestationsco.value, "refusé", this.x);
    }else if(type == "Demande_stage") {
      this.formservice.update_doc_refusee(this.formservice.formAttestationsco.value, "refusé", this.x);
    }else if(type == "relve_notes") {
      this.formservice.update_doc_refusee(this.formservice.formAttestationsco.value, "refusé", this.x);
    }

    this.formservice.initialisation_attsco();
    this.annuler();
  }
}
