import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from "@angular/material";
import {DocumentScoService} from "../../service_sco/document-sco.service";

@Component({
  selector: 'app-rdn-accepte',
  templateUrl: './rdn-accepte.component.html',
  styleUrls: ['./rdn-accepte.component.css']
})
export class RdnAccepteComponent implements OnInit {

  dataSource;
  x: any;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['etudiantid','date_env','justification'];

  constructor(private docserve : DocumentScoService) { }

  ngOnInit() {
    this.getDocs();
  }

  getDocs(){
    this.docserve.getdocbytypeandstatus("relve_notes","accepté")
      .subscribe(data => {
        this.x=data;
        this.dataSource = new MatTableDataSource(this.x);
        this.dataSource.sort = this.sort;


      },error1 => {
        console.log(error1);

      })


  }

}
