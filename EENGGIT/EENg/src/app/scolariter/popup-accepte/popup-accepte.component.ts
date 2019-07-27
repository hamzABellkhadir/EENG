import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {etudiantservice} from "../../../services/serve";
import {DocumentseviceService} from "../../etudiant/serviceEtudiant/documentsevice.service";
import {PopupRefuseComponent} from "../popup-refuse/popup-refuse.component";
import {DocumentScoService} from "../service_sco/document-sco.service";
import {Formdoc} from "../service_sco/formdoc";

@Component({
  selector: 'app-popup-accepte',
  templateUrl: './popup-accepte.component.html',
  styleUrls: ['./popup-accepte.component.css']
})
export class PopupAccepteComponent implements OnInit {
  x : any;
  y : any;


  constructor(public etudserve:etudiantservice, public docserve : DocumentseviceService ,
              public dialogRef: MatDialogRef<PopupRefuseComponent> , public formservice :Formdoc,) { }

  ngOnInit() {
    this.getDocs();
    this.getEtud();
  }

  getDocs(){
    this.docserve.getoneDocuments(localStorage.getItem("id_doc"))
      .subscribe(data => {
        this.x=data;

      },error1 => {
        console.log(error1);

      })
  }

  getEtud(){
    this.etudserve.gettEtudiant(localStorage.getItem("idEt"))
      .subscribe(data => {
          this.y=data;
        },error1 => {
          console.log(error1);

        }
      )
  }

  annuler(){
    this.dialogRef.close();
  }



  update_doc(){
    this.x = localStorage.getItem("id_doc");
    this.formservice.update_doc_accepté(this.x);
    this.annuler();
  }
}
