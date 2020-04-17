import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MatSort, MatSortable , MatTableDataSource} from "@angular/material";
import {etudiantservice} from "../../../services/serve";
import {DetailComponent} from "../detail/detail.component";
import {DocumentFormserve} from "../serviceEtudiant/DocumentForm";

export interface PeriodicElement {
  id_doc:any;
  typedoc: string;
  date_env: string;
  status: string;
  justification_refus: string;
}




@Component({
  selector: 'app-tous-les-demandes',
  templateUrl: './tous-les-demandes.component.html',
  styleUrls: ['./tous-les-demandes.component.css']
})
export class TousLesDemandesComponent implements OnInit {

  displayedColumns: string[] = ['typedoc', 'date_env', 'status','position'];
  dataSource;
  x: any;



  constructor(public docserve : etudiantservice , public dialog: MatDialog,
              private service :DocumentFormserve) { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getDocs();
    this.docserve.IsUserLogedOut();

  }

  getDocs(){
    this.docserve.getDocuments(localStorage.getItem("username"))
      .subscribe(data => {
        this.x=data;
        this.dataSource = new MatTableDataSource(this.x);
        this.dataSource.sort = this.sort;
      },error1 => {
        console.log(error1);

      })
  }

  openDialog(x){
    localStorage.setItem("id_doc", x);
    this.dialog.open(DetailComponent,{

      width: '600px',
    });
    //this.service.getdetail(x);
  }



}
