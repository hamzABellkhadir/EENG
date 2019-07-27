import {HttpClient} from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import {etudiantservice} from "../../../services/serve";

@Component({
  selector: 'app-profile-scolarite',
  templateUrl: './profile-scolarite.component.html',
  styleUrls: ['./profile-scolarite.component.css']
})
export class ProfileScolariteComponent implements OnInit {

  isActive = true;
  x:any;
  constructor(private http: HttpClient , public etudserve:etudiantservice) { }

  ngOnInit() {
    this.etudserve.IsAdminLogedOut();
    this.getAdmin();
  }

  getAdmin(){
    this.etudserve.getOneAdmin(localStorage.getItem("admin"))
      .subscribe(data => {
          this.x=data;
        },error1 => {
          console.log(error1);

        }
      )
  }

}
