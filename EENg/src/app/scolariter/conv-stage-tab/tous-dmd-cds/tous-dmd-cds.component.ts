import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatSort, MatTableDataSource} from "@angular/material";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {etudiantservice} from "../../../../services/serve";
import {PopupAccepteComponent} from "../../popup-accepte/popup-accepte.component";
import {DocumentScoService} from "../../service_sco/document-sco.service";
import {PopupRefuseComponent} from "../../popup-refuse/popup-refuse.component";
import {Formdoc} from "../../service_sco/formdoc";
declare function printData() : any;

@Component({
  selector: 'app-tous-dmd-cds',
  templateUrl: './tous-dmd-cds.component.html',
  styleUrls: ['./tous-dmd-cds.component.css']
})
export class TousDmdCdsComponent implements OnInit {

  dataSource;
  x: any;
  etudiantt = null;
  id_docc;
  document;
  @ViewChild(MatSort) sort: MatSort;

  constructor( public docserve : DocumentScoService , public dialog: MatDialog,
  public etudiantservice : etudiantservice,private modalService: NgbModal
, public servicedocfrom : Formdoc) { }
  displayedColumns: string[] = ['etudiantid', 'date_env','Action'];
  ngOnInit() {
    this.getDocs();
  }

  getDocs(){
    this.docserve.getdocbytypeandstatus("ConventionStage","encoure")
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

  openDialogRefuse(x , y){
    localStorage.setItem("id_doc", x);
    localStorage.setItem("typeDoc", y);
    this.dialog.open(PopupRefuseComponent,{
      width: '600px',
    });

  }




  // traitemant imprimmer


  getetudaint(idetudaint,id_doc){
    this.etudiantservice.getEtudiant(idetudaint).subscribe(data=>{
      this.etudiantt = data;
    })
    this.id_docc = id_doc;
    this.docserve.get_doc(id_doc).subscribe(data=>{
      this.document = data;
    })
  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-gray-backdrop',centered: true,size: 'lg'});
  }
  t(id,c){
    printData();
    this.servicedocfrom.update_doc_accepté(id);
    c('Cross click');
  }



}
