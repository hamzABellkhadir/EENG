import {HttpClient} from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import {etudiant} from "../../../module/class-etudiant";
import {etudiantservice} from "../../../services/serve";


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  isActive = true;

etud:etudiant=new etudiant();
x:any;
  constructor(private http: HttpClient , public etudserve:etudiantservice) { }

  ngOnInit() {
    this.getEtud();
    this.etudserve.IsUserLogedOut();
  }

  getEtud(){
    this.etudserve.gettEtudiant(localStorage.getItem("username"))
      .subscribe(data => {
        this.x=data;
      },error1 => {
        console.log(error1);

          }
        )
  }
    //this.http.get(""){
  // }
}
