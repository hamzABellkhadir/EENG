import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from "@angular/material";
import {DocumentScoService} from "../../service_sco/document-sco.service";

@Component({
  selector: 'app-accepte-att',
  templateUrl: './accepte-att.component.html',
  styleUrls: ['./accepte-att.component.css']
})
export class AccepteAttComponent implements OnInit {

  dataSource;
  x: any;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['etudiantid','date_env','justification'];

  constructor(private docserve : DocumentScoService) { }

  ngOnInit() {
    this.getDocs();
  }

  getDocs(){
    this.docserve.getdocbytypeandstatus("Attestation_scolarite","accepté")
      .subscribe(data => {
        this.x=data;
        this.dataSource = new MatTableDataSource(this.x);
        this.dataSource.sort = this.sort;
      },error1 => {
        console.log(error1);
      })


  }
}
