import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {ADSRDN} from "../../../module/ADS-RDN";
import {reclamationclass} from "../../../module/reclamationclass";

@Injectable({
  providedIn: 'root'
})
export class DocumentseviceService {

  constructor(public http:HttpClient ,  private rout:Router) { }

  setrelverDeNote(Rn : ADSRDN){
    return  this.http.post( 'http://localhost:8088/relveNote', Rn );
  }
  Insert_att(att : ADSRDN){
    return this.http.post( 'http://localhost:8088/AttestationScolariter',att);
  }

  Insert_reclamation(recl : reclamationclass){
    return this.http.post( 'http://localhost:8088/reclamation',recl);
  }

  getoneDocuments(id_doc){
    return this.http.get('http://localhost:8088/AttestationScolariter/'+id_doc);
  }

  insert_convention(att : ADSRDN){
    return this.http.post( 'http://localhost:8088/ConventionStage',att);
  }
  insert_demandediplome(dplm : ADSRDN){
    return this.http.post( 'http://localhost:8088/DemandeDiplome',dplm);
  }
  Insert_demandeStage(dss : ADSRDN){
    return this.http.post( 'http://localhost:8088/demandeStage',dss);
  }
  chercher_par_typedoc_user(typedoc : string , user : string){
    return this.http.get( 'http://localhost:8088/chercherDocuserandtypedoc?typedoc='+typedoc+'&user='+user);
  }


  get_doc(id_doc){
    return this.http.get( 'http://localhost:8088/AttestationScolariter/'+id_doc);
  }


}
