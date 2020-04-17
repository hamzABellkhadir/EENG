import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatSort, MatTableDataSource} from "@angular/material";
import {PopupAccepteComponent} from "../../popup-accepte/popup-accepte.component";
import {PopupRefuseComponent} from "../../popup-refuse/popup-refuse.component";
import {DocumentScoService} from "../../service_sco/document-sco.service";

@Component({
  selector: 'app-tout-dmd-ddd',
  templateUrl: './tout-dmd-ddd.component.html',
  styleUrls: ['./tout-dmd-ddd.component.css']
})
export class ToutDmdDddComponent implements OnInit {

  dataSource;
  x: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor( public docserve : DocumentScoService ,  public dialog: MatDialog) { }
  displayedColumns: string[] = ['etudiantid', 'date_env', 'justification','Action'];
  ngOnInit() {
    this.getDocs();
  }

  getDocs(){
    this.docserve.getdocbytypeandstatus("Demande_diplome","encoure")
      .subscribe(data => {
        this.x=data;
        this.dataSource = new MatTableDataSource(this.x);
        this.dataSource.sort = this.sort;


      },error1 => {
        console.log(error1);

      })


  }

  refusepopup(x,y){
    this.openDialogRefuse(x,y);

  }

  openDialogRefuse(x , y) {
    localStorage.setItem("id_doc", x);
    localStorage.setItem("typeDoc", y);
    this.dialog.open(PopupRefuseComponent, {
      width: '600px',
    });
  }

  acceptepopup(x ,a ){
    localStorage.setItem("id_doc", x);
    localStorage.setItem("idEt",a);
    this.dialog.open(PopupAccepteComponent,{
      width: '400px',
    });
  }
}
