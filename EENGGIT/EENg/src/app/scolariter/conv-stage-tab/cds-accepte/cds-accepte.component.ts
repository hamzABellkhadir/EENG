import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from "@angular/material";
import {DocumentScoService} from "../../service_sco/document-sco.service";

@Component({
  selector: 'app-cds-accepte',
  templateUrl: './cds-accepte.component.html',
  styleUrls: ['./cds-accepte.component.css']
})
export class CdsAccepteComponent implements OnInit {

  dataSource;
  x: any;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['etudiantid','date_env',];

  constructor(private docserve : DocumentScoService) { }

  ngOnInit() {
    this.getDocs();
  }

  getDocs(){
    this.docserve.getdocbytypeandstatus("ConventionStage","accepté")
      .subscribe(data => {
        this.x=data;
        this.dataSource = new MatTableDataSource(this.x);
        this.dataSource.sort = this.sort;


      },error1 => {
        console.log(error1);

      })


  }

}
