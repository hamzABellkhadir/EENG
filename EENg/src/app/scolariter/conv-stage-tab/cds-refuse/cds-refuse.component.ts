import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from "@angular/material";
import {DocumentScoService} from "../../service_sco/document-sco.service";

@Component({
  selector: 'app-cds-refuse',
  templateUrl: './cds-refuse.component.html',
  styleUrls: ['./cds-refuse.component.css']
})
export class CdsRefuseComponent implements OnInit {

  dataSource;
  x: any;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['etudiantid','date_env','justification_refus'];

  constructor(private docserve : DocumentScoService) { }

  ngOnInit() {
    this.getDocs();
  }

  getDocs(){
    this.docserve.getdocbytypeandstatus("ConventionStage","refusé")
      .subscribe(data => {
        this.x=data;
        this.dataSource = new MatTableDataSource(this.x);
        this.dataSource.sort = this.sort;


      },error1 => {
        console.log(error1);

      })


  }

}
