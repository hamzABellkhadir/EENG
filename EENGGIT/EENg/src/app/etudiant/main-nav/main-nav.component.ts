import {HttpClient} from "@angular/common/http";
import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {MatTableDataSource} from "@angular/material";
import {Router} from "@angular/router";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {etudiant} from "../../../module/class-etudiant";
import {etudiantservice} from "../../../services/serve";
import {fadeAnimation} from "./animation";


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  animations: [fadeAnimation]
})
export class MainNavComponent implements OnInit{

  etud:etudiant=new etudiant();
  x:any;


  getEtud(){
    this.etudserve.gettEtudiant(localStorage.getItem("username"))
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
  private aaa: null;

  constructor(private http: HttpClient , public etudserve:etudiantservice,private breakpointObserver: BreakpointObserver , public router : Router
  ,private loginnserve: etudiantservice) {}

  logout(){
    this.router.navigateByUrl('/');
    localStorage.removeItem("username");
  }

  ngOnInit(): void {
    //console.log(localStorage.getItem("username"));
    this.loginnserve.IsUserLogedOut();
    this.getEtud();
    this.etudserve.IsUserLogedOut();
    this.number_doc();
  }

  count_doc;
  number_doc(){
    this.etudserve.getDocuments(localStorage.getItem("username"))
      .subscribe(data => {
        this.count_doc = data;
      })
  }



}
