import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from "@angular/material";
import {DocumentScoService} from "../../service_sco/document-sco.service";

@Component({
  selector: 'app-rdn-refuse',
  templateUrl: './rdn-refuse.component.html',
  styleUrls: ['./rdn-refuse.component.css']
})
export class RdnRefuseComponent implements OnInit {

  dataSource;
  x: any;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['etudiantid','date_env','justification', 'justification_refus'];

  constructor(private docserve : DocumentScoService) { }

  ngOnInit() {
    this.getDocs();
  }

  getDocs(){
    this.docserve.getdocbytypeandstatus("relve_notes","refusé")
      .subscribe(data => {
        this.x=data;
        this.dataSource = new MatTableDataSource(this.x);
        this.dataSource.sort = this.sort;


      },error1 => {
        console.log(error1);

      })


  }

}
