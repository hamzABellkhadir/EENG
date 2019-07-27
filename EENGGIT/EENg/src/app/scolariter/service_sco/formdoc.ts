import {formatDate} from "@angular/common";
import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ADSRDN} from "../../../module/ADS-RDN";
import {DocumentseviceService} from "../../etudiant/serviceEtudiant/documentsevice.service";
import {NotificationService} from "../../etudiant/serviceEtudiant/Notification";
import {DocumentScoService} from "./document-sco.service";

@Injectable({
  providedIn: 'root'
})
export class Formdoc {

  documentmoodule: ADSRDN = new ADSRDN();
  constructor(public docservice: DocumentScoService ,
              private notificationService: NotificationService){}

  // Attestation scolariter  form ------------------------------------------------
  formAttestationsco: FormGroup = new FormGroup({
    justification_refus: new FormControl('', Validators.required),
  });

  format = 'dd/MM/yyyy';
  myDate = Date.now();
  locale = 'en-US';
  formattedDate = formatDate(this.myDate, this.format, this.locale);


  x:any;



  update_doc_accepté(id_doc) {
    this.docservice.get_doc(id_doc).subscribe(data=>{
      this.x = data;

      this.documentmoodule.semestre = this.x.semestre;
      this.documentmoodule.annee_universitaire = this.x.annee_universitaire;
      this.documentmoodule.typedoc = this.x.typedoc;
      this.documentmoodule.email = this.x.email;
      this.documentmoodule.date_debut_stage = this.x.date_debut_stage;
      this.documentmoodule.tel_entre = this.x.tel_entre;
      this.documentmoodule.type_diplome = this.x.type_diplome;
      this.documentmoodule.ville_entre = this.x.ville_entre;
      this.documentmoodule.nom_projet = this.x.nom_projet;
      this.documentmoodule.nom_entre = this.x.nom_entre;
      this.documentmoodule.justification = this.x.justification;
      this.documentmoodule.date_env = this.x.date_env;
      this.documentmoodule.etudiantid = this.x.etudiantid;
      this.documentmoodule.dureestage = this.x.dureestage;


      this.documentmoodule.status = "accepté" ;
      this.documentmoodule.date_refus = this.x.semestre;
      this.documentmoodule.justification_refus = this.x.semestre;

      if(this.x.typedoc == "Attestation_Scolarite"){
        this.docservice.update_att(this.documentmoodule,id_doc).subscribe(data => {
        })
      }else if(this.x.typedoc == "ConventionStage") {
        this.docservice.update_cds(this.documentmoodule,id_doc).subscribe(data => {
        })
      }else if(this.x.typedoc == "Demande_diplome") {
        this.docservice.update_ddd(this.documentmoodule,id_doc).subscribe(data => {
        })
      }else if(this.x.typedoc == "Demande_stage") {
        this.docservice.update_dds(this.documentmoodule,id_doc).subscribe(data => {
        })
      }else if(this.x.typedoc == "relve_notes") {
        this.docservice.update_rdn(this.documentmoodule,id_doc).subscribe(data => {
        })
      }


      this.notificationService.success(" demande accepté.");



    })
  }

  initialisation_attsco() {
    this.formAttestationsco.setValue({
      justification_refus: '',
    });
  }


  update_doc_refusee(attsco,st,id_doc) {
    this.docservice.get_doc(id_doc).subscribe(data=>{
      this.x = data;

      this.documentmoodule.semestre = this.x.semestre;
      this.documentmoodule.annee_universitaire = this.x.annee_universitaire;
      this.documentmoodule.typedoc = this.x.typedoc;
      this.documentmoodule.email = this.x.email;
      this.documentmoodule.date_debut_stage = this.x.date_debut_stage;
      this.documentmoodule.tel_entre = this.x.tel_entre;
      this.documentmoodule.type_diplome = this.x.type_diplome;
      this.documentmoodule.ville_entre = this.x.ville_entre;
      this.documentmoodule.nom_projet = this.x.nom_projet;
      this.documentmoodule.nom_entre = this.x.nom_entre;
      this.documentmoodule.justification = this.x.justification;
      this.documentmoodule.date_env = this.x.date_env;
      this.documentmoodule.etudiantid = this.x.etudiantid;
      this.documentmoodule.dureestage = this.x.dureestage;

      this.documentmoodule.status = st ;
      this.documentmoodule.date_refus = this.formattedDate;
      this.documentmoodule.justification_refus = attsco.justification_refus;

      if(this.x.typedoc == "Attestation_Scolarite"){
        this.docservice.update_att(this.documentmoodule,id_doc).subscribe(data => {
        })
      }else if(this.x.typedoc == "ConventionStage") {
        this.docservice.update_cds(this.documentmoodule,id_doc).subscribe(data => {
        })
      }else if(this.x.typedoc == "Demande_diplome") {
        this.docservice.update_ddd(this.documentmoodule,id_doc).subscribe(data => {
        })
      }else if(this.x.typedoc == "Demande_stage") {
        this.docservice.update_dds(this.documentmoodule,id_doc).subscribe(data => {
        })
      }else if(this.x.typedoc == "relve_notes") {
        this.docservice.update_rdn(this.documentmoodule,id_doc).subscribe(data => {
        })
      }

      this.notificationService.success(" demande refusée");



    })
  }


}
