import {HttpClient} from "@angular/common/http";
import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {MatTableDataSource} from "@angular/material";
import {Router} from "@angular/router";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {etudiantservice} from "../../../services/serve";
import {DocumentScoService} from "../service_sco/document-sco.service";
import {fadeAnimation} from "./animation";


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  animations: [fadeAnimation]
})
export class MainNavComponent implements OnInit{

  x:any;



  getAdmin(){
    this.etudserve.getOneAdmin(localStorage.getItem("admin"))
      .subscribe(data => {
          this.x=data;
        },error1 => {
          console.log(error1);

        }
      )
  }


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  constructor(private http: HttpClient , public etudserve:etudiantservice,
              private breakpointObserver: BreakpointObserver , public router : Router,public docserve : DocumentScoService) {}

  logout(){
    this.router.navigateByUrl('/');
    localStorage.removeItem("admin");
  }

  ngOnInit(): void {
    //console.log(localStorage.getItem("username"));

    this.getAdmin();
    this.etudserve.IsAdminLogedOut();
    this.number_rl();
  }

  count_att;
  number_att(){
    this.docserve.getdocbytypeandstatus("Attestation_scolarite","encoure")
      .subscribe(data => {
        this.count_att = data;
       })
  }
  count_ddd;
  number_ddd(){
    this.docserve.getdocbytypeandstatus("Demande_diplome","encoure")
      .subscribe(data => {this.count_ddd = data;
      })
  }
  count_rdn;
  number_rdn(){
    this.docserve.getdocbytypeandstatus("relve_notes","encoure")
      .subscribe(data => {this.count_rdn = data;
      })
  }

  count_dds;
  number_dds(){
    this.docserve.getdocbytypeandstatus("Demande_stage","encoure")
      .subscribe(data => {this.count_dds = data;
      })
  }

  count_cds;
  number_cds(){
    this.docserve.getdocbytypeandstatus("ConventionStage","encoure")
      .subscribe(data => {this.count_cds = data;
      })
  }
  number_rl(){
    this.number_att();
    this.number_ddd();
    this.number_cds();
    this.number_dds();
    this.number_rdn()
  }
}
