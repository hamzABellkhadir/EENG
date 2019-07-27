import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {DocumentFormserve} from "../serviceEtudiant/DocumentForm";
import {DocumentseviceService} from "../serviceEtudiant/documentsevice.service";
import {TousLesDemandesComponent} from "../tous-les-demandes/tous-les-demandes.component";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(private service :DocumentFormserve, private docserve : DocumentseviceService) { }

  ngOnInit() {
    this.getDocs();
  }

  x:any;

  getDocs(){
    this.docserve.getoneDocuments(localStorage.getItem("id_doc"))
      .subscribe(data => {
        this.x=data;

      },error1 => {
        console.log(error1);

      })


  }

}
