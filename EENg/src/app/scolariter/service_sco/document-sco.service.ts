import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material";
import {Router} from "@angular/router";
import {ADSRDN} from "../../../module/ADS-RDN";
import {PopupRefuseComponent} from "../popup-refuse/popup-refuse.component";

@Injectable({
  providedIn: 'root'
})
export class DocumentScoService {

  constructor(public http:HttpClient ,  private rout:Router, public dialog: MatDialog
    ) { }

  getdocbytypeandstatus(type , status){
    return this.http.get("http://localhost:8088/getdocbytypeandstatus?typedoc="+type+"&status="+status);
  }





  update_att(att : ADSRDN,id_doc){
    return this.http.put( 'http://localhost:8088/AttestationScolariter/'+id_doc,att);
  }

  get_doc(id_doc){
    return this.http.get( 'http://localhost:8088/AttestationScolariter/'+id_doc);
  }

  update_cds(att : ADSRDN,id_doc){
    return this.http.put( 'http://localhost:8088/ConventionStage/'+id_doc,att);
  }

  update_dds(att : ADSRDN,id_doc){
    return this.http.put( 'http://localhost:8088/demandeStage/'+id_doc,att);
  }


  update_ddd(att : ADSRDN,id_doc){
    return this.http.put( 'http://localhost:8088/DemandeDiplome/'+id_doc,att);
  }


  update_rdn(att : ADSRDN,id_doc){
    return this.http.put( 'http://localhost:8088/relveNote/'+id_doc,att);
  }
  onClose() {
  //,public dialogRef:  MatDialogRef<PopupRefuseComponent>
    //this.service.form.reset();
    //this.service.initializeFormGroup();
    //this.dialogRef.close();
  }

}
