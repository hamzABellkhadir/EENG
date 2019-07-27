import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {ADSRDN} from "../module/ADS-RDN";
@Injectable()
export class etudiantservice{
  constructor(public http:HttpClient ,  private rout:Router){

  }
  getEtudiant(napoge:string){
    return this.http.get("http://localhost:8088/etudiant/"+napoge);
    /*+sessionStorage.getItem("username"))*/
  }


  gettEtudiant(napoge:string){
    return this.http.get("http://localhost:8088/etudiant/"+napoge);
  }
 // chercher un etudiant avec login et mdp ----------------------------
  chercherEtudiant(napoge:string,mpd:String){
    return this.http.get("http://localhost:8088/chercheretudiant?login="+napoge+"&mdp="+mpd);
  }

  // chercher un admine avec login et mdp ----------------------------
  chercherAdmine(napoge:string,mpd:String){
    return this.http.get("http://localhost:8088/chercheradmine?login="+napoge+"&mdp="+mpd);
  }

  getOneAdmin(n_responsable:string){
    return this.http.get("http://localhost:8088//administration/"+n_responsable);
  }

  getDocuments(napoge){
    return this.http.get('http://localhost:8088/CDS/'+napoge);
  }







  isadminLoged(){
    let user = localStorage.getItem('admin');
    //console.log(!(user === null));
    return !(user === null);
  }
  IsAdminLogedOut(){
    if(!this.isadminLoged()){
      this.rout.navigateByUrl('');
    }
  }


  isUserLoged(){
    let user = localStorage.getItem('username');
    //console.log(!(user === null));
    return !(user === null);
  }

  IsUserLogedOut(){
    if(!this.isUserLoged()){
      this.rout.navigateByUrl('');
    }
  }


  getatt(){
    return this.http.get('http://localhost:8088/AttestationScolariter');
  }
}
