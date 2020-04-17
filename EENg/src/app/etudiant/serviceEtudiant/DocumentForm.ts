import {formatDate} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {log} from "util";
import {ADSRDN} from "../../../module/ADS-RDN";
import {reclamationclass} from "../../../module/reclamationclass";
import {DocumentseviceService} from "./documentsevice.service";
import {NotificationService} from "./Notification";


@Injectable({
  providedIn: 'root'
})
export class DocumentFormserve {

  documentmoodule: ADSRDN = new ADSRDN();
  reclamationModule : reclamationclass = new reclamationclass();

  constructor(public docservice: DocumentseviceService , private notificationService: NotificationService) {
  }

  form: FormGroup = new FormGroup({
    /*
    date_refus: new FormControl(''),
    date_env: new FormControl(''),
    justification: new FormControl(''),
    status: new FormControl(''),
    justification_refus: new FormControl(''),
    typedoc: new FormControl(''),
    annee_universitaire: new FormControl(''),
    semestre: new FormControl(''),
    type_diplome: new FormControl(''),
    etudiantid: new FormControl(''),
    */
    date_debut_stage: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    nom_entre: new FormControl('', Validators.required),
    nom_projet: new FormControl('', Validators.required),
    tel_entre: new FormControl('', [Validators.required,
      Validators.minLength(10)]),
    ville_entre: new FormControl('', Validators.required),
    dureestage :new FormControl('', Validators.required),

  });


  formDetail: FormGroup = new FormGroup({


    date_env: new FormControl(''),
    justification: new FormControl(''),
    status: new FormControl(''),
    justification_refus: new FormControl(''),
    typedoc: new FormControl(''),
    annee_universitaire: new FormControl(''),
    semestre: new FormControl(''),
    type_diplome: new FormControl(''),
    etudiantid: new FormControl(''),

    date_debut_stage: new FormControl(''),
    email: new FormControl(''),
    nom_entre: new FormControl(''),
    nom_projet: new FormControl('' ),
    tel_entre: new FormControl(''),
    ville_entre: new FormControl(''),
    date_refus: new FormControl('')
  });

  initialisation_detail(x) {
    this.formDetail.setValue({

      date_refus : x.date_refus,
      date_env:x.date_env,
      justification:x.justification,
      status:x.status,
      justification_refus:x.justification_refus,
      typedoc:x.typedoc,
      annee_universitaire:x.annee_universitaire,
      semestre:x.semestre,
      date_debut_stage:x.date_debut_stage,
      email:x.email,
      nom_entre:x.nom_entre,
      nom_projet:x.nom_projet,
      tel_entre:x.tel_entre,
      ville_entre:x.ville_entre,
      type_diplome:x.type_diplome,
      etudiantid:x.etudiantid




    });
    console.log(";;;;;;;;;;;;;;");
  }



  ajouter_cenventionstg(cnv){
    this.documentmoodule.semestre = null;
    this.documentmoodule.annee_universitaire = null;
    this.documentmoodule.justification = null;

    this.documentmoodule.date_env = this.formattedDate;
    this.documentmoodule.status = "encoure";
    this.documentmoodule.typedoc = "ConventionStage";
    this.documentmoodule.etudiantid = localStorage.getItem("username");
    this.documentmoodule.email = cnv.email;
    let dy =cnv.date_debut_stage.getUTCMonth() +1;
    let dat = dy+"/"+cnv.date_debut_stage.getDate()+"/"+cnv.date_debut_stage.getUTCFullYear();
      this.documentmoodule.date_debut_stage = dat;
      this.documentmoodule.dureestage = cnv.dureestage;
    this.documentmoodule.date_refus = null;

    this.documentmoodule.tel_entre = cnv.tel_entre;
    this.documentmoodule.type_diplome = null;
    this.documentmoodule.justification_refus = null;
    this.documentmoodule.ville_entre = cnv.ville_entre;
    this.documentmoodule.nom_projet = cnv.nom_projet;
    this.documentmoodule.nom_entre = cnv.nom_entre;
    this.docservice.insert_convention(this.documentmoodule).subscribe(data => {
      this.notificationService.success(" Félicitation " +
        "Nous tenons à vous confirmer la réussite de votre demande, et elle sera traiter dans les bref délais.");
      }, error1 => {
        console.log(error1);
      }
    );
  }
  // relver de note form ------------------------------------------------
  formRelveNote: FormGroup = new FormGroup({
    justification: new FormControl('', Validators.required),
    annee_universitaire: new FormControl('', Validators.required),
    semestre: new FormControl('', Validators.required),
  });
// Attestation scolariter  form ------------------------------------------------
  formAttestationsco: FormGroup = new FormGroup({
    justification: new FormControl('', Validators.required),
  });

// ajouter un relver de note ----------------------------------

  format = 'dd/MM/yyyy';
  myDate = Date.now();
  locale = 'en-US';
  formattedDate = formatDate(this.myDate, this.format, this.locale);

  ajouter_relveNote(RelveNote) {

    this.documentmoodule.semestre = RelveNote.semestre;
    this.documentmoodule.annee_universitaire = RelveNote.annee_universitaire;
    this.documentmoodule.justification = RelveNote.justification;
    this.documentmoodule.date_env = this.formattedDate;
    this.documentmoodule.status = "encoure";
    this.documentmoodule.typedoc = "relve_notes";
    this.documentmoodule.etudiantid = localStorage.getItem("username");
    this.documentmoodule.email = null;
    this.documentmoodule.date_debut_stage = null;
    this.documentmoodule.date_refus = null;
    this.documentmoodule.dureestage = null;
    this.documentmoodule.tel_entre = null;
    this.documentmoodule.type_diplome = null;
    this.documentmoodule.justification_refus = null;
    this.documentmoodule.ville_entre = null;
    this.documentmoodule.nom_projet = null;
    this.documentmoodule.nom_entre = null;
    this.docservice.setrelverDeNote(this.documentmoodule).subscribe(data => {
      this.notificationService.success(" Félicitation " +
        "Nous tenons à vous confirmer la réussite de votre demande, et elle sera traiter dans les bref délais.");
      }, error1 => {
        console.log(error1);
      }
    );
  }

  x:any;
  i=0;
  ajouter_Attestationsco(attsco) {

    this.documentmoodule.semestre = null;
    this.documentmoodule.annee_universitaire = null;
    this.documentmoodule.justification = attsco.justification;
    this.documentmoodule.date_env = this.formattedDate;
    this.documentmoodule.status = "encoure";
    this.documentmoodule.typedoc = "Attestation_Scolarite";
    this.documentmoodule.etudiantid = localStorage.getItem("username");
    this.documentmoodule.email = null;
    this.documentmoodule.date_debut_stage = null;
    this.documentmoodule.date_refus = null;
    this.documentmoodule.tel_entre = null;
    this.documentmoodule.dureestage = null;
    this.documentmoodule.type_diplome = null;
    this.documentmoodule.justification_refus = null;
    this.documentmoodule.ville_entre = null;
    this.documentmoodule.nom_projet = null;
    this.documentmoodule.nom_entre = null;
    this.docservice.chercher_par_typedoc_user("Attestation_Scolarite",localStorage.getItem("username")).subscribe(data=>{
      this.x=data;


      if(data == null){

        this.docservice.Insert_att(this.documentmoodule).subscribe(data => {

        }, error1 => {
          console.log(error1);
        });
        this.notificationService.success(" Félicitation " +
          "Nous tenons à vous confirmer la réussite de votre demande, et elle sera traiter dans les bref délais.");
      }else {
        let date;
        for(let c of this.x.content){
          date = c.date_env;
        }
        this.notificationService.notification_error(" Attention\n" +
          "Votre dernière demande était le: "+ date+" vous pouvez redemander votre attestation de scolarité" +
          " qu'après 60 jours de cette date. Ou bien consulter le responsable des affaires éstudiantines")
      }
    });

  }




  ajouter_demandeStage(attsco) {

    this.documentmoodule.semestre = null;
    this.documentmoodule.annee_universitaire = null;
    this.documentmoodule.justification = attsco.justification;
    this.documentmoodule.date_env = this.formattedDate;
    this.documentmoodule.status = "encoure";
    this.documentmoodule.typedoc = "Demande_stage";
    this.documentmoodule.etudiantid = localStorage.getItem("username");
    this.documentmoodule.email = null;
    this.documentmoodule.date_debut_stage = null;
    this.documentmoodule.dureestage = null;
    this.documentmoodule.date_refus = null;
    this.documentmoodule.tel_entre = null;
    this.documentmoodule.type_diplome = null;
    this.documentmoodule.justification_refus = null;
    this.documentmoodule.ville_entre = null;
    this.documentmoodule.nom_projet = null;
    this.documentmoodule.nom_entre = null;
    this.docservice.chercher_par_typedoc_user("Demande_stage",localStorage.getItem("username")).subscribe(data=>{
      this.x=data;


      if(data == null){
        this.docservice.Insert_demandeStage(this.documentmoodule).subscribe(data => {

        }, error1 => {
          console.log(error1);
        });
        this.notificationService.success(" Félicitation " +
          "Nous tenons à vous confirmer la réussite de votre demande, et elle sera traiter dans les bref délais.");
      }else {
        let date;
        for(let c of this.x.content){
          date = c.date_env;
        }
        this.notificationService.notification_error(" Attention\n" +
          "Votre dernière demande était le: "+ date +" vous pouvez redemander votre attestation de scolarité" +
          " qu'après 10 jours de cette date. Ou bien consulter le responsable des affaires éstudiantines")
      }
    });

  }

  /*

  */

  initialisation_relverN() {
    this.formRelveNote.setValue({
      justification: '',
      annee_universitaire: '',
      semestre: '',
    });
  }
  initialisation_cnv() {
    this.form.setValue({
      date_debut_stage:'',
      email:"",
      nom_entre:"",
      nom_projet:"",
      tel_entre:"",
      ville_entre:"",
      dureestage:"",
    });
  }
  initialisation_attsco() {
    this.formAttestationsco.setValue({
      justification: '',
    });
  }

  formdiplome : FormGroup = new FormGroup({
    justification: new FormControl(''),
    type_diplome: new FormControl('')
  });

  initialisation_ddiplome() {
    this.formdiplome.setValue({
      justification: '',
      type_diplome: ''
    });
  }

  ajouter_demandeDiplome(dplm){

    this.documentmoodule.semestre = null;
    this.documentmoodule.annee_universitaire = null;
    this.documentmoodule.justification = dplm.justification;
    this.documentmoodule.date_env = this.formattedDate;
    this.documentmoodule.status = "encoure";
    this.documentmoodule.typedoc = "Demande_diplome";
    this.documentmoodule.etudiantid = localStorage.getItem("username");
    this.documentmoodule.email = null;
    this.documentmoodule.date_debut_stage = null;
    this.documentmoodule.dureestage = null;
    this.documentmoodule.date_refus = null;
    this.documentmoodule.tel_entre = null;
    this.documentmoodule.type_diplome = dplm.type_diplome;
    this.documentmoodule.justification_refus = null;
    this.documentmoodule.ville_entre = null;
    this.documentmoodule.nom_projet = null;
    this.documentmoodule.nom_entre = null;
    this.docservice.insert_demandediplome(this.documentmoodule).subscribe(data => {
        this.notificationService.success(" Félicitation " +
          "Nous tenons à vous confirmer la réussite de votre demande, et elle sera traiter dans les bref délais.");
      }, error1 => {
        console.log(error1);
      }
    );
  }

  formreclamation : FormGroup = new FormGroup({
    typerecl: new FormControl('', Validators.required),
    avantrecl: new FormControl('', Validators.required),
    apresrecl: new FormControl('', Validators.required),
    justification: new FormControl('', Validators.required),
  });

  initialisation_reclamation() {
    this.formreclamation.setValue({
      typerecl: '',
      avantrecl: '',
      apresrecl: '',
      justification: '',
    });
  }

  ajouter_reclamation(recl){

    this.reclamationModule.typerecl= recl.typerecl;
    this.reclamationModule.avantchang= recl.avantrecl;
    this.reclamationModule.apreschang= recl.apresrecl;
    this.reclamationModule.justification= recl.justification;
    this.reclamationModule.daterecl = this.formattedDate;
    this.reclamationModule.etudiantid = localStorage.getItem("username");
    this.reclamationModule.status = "encoure";



    this.docservice.Insert_reclamation(this.reclamationModule).subscribe(data => {
        this.notificationService.success(" Félicitation " +
          "Nous tenons à vous confirmer la réussite de votre demande, et elle sera traiter dans les bref délais.");
      }, error1 => {
        console.log(error1);
      }
    );
  }

  getdetail(x){
     this.docservice.getoneDocuments(x).subscribe(data=>{
      this.formDetail.setValue(data);
    });

  }

}
/*
date_refus:'',
date_env:''   ,
justification:"",
status:"",
justification_refus:"",
typedoc:"",
annee_universitaire:"",
semestre:"",
date_debut_stage:'',
email:"",
nom_entre:"",
nom_projet:"",
tel_entre:"",
ville_entre:"",
type_diplome:"",
etudiantid:"",
 */
