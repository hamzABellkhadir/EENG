import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {Router} from "@angular/router";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {etudiantservice} from "../../../services/serve";

@Component({
  selector: 'app-frst-page',
  templateUrl: './frst-page.component.html',
  styleUrls: ['./frst-page.component.css']
})
export class FrstPageComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    

  constructor(private breakpointObserver: BreakpointObserver ,
              private loginserve:etudiantservice , private rout:Router)  {}

  IsUserLogedIn(){
    if(this.loginserve.isUserLoged()){
      //console.log(!this.loginserve.isUserLoged());
      this.rout.navigateByUrl('/main');
    }
  }

  IsAdminLogedIn(){
    if(this.loginserve.isadminLoged()){
      //console.log(!this.loginserve.isUserLoged());
      this.rout.navigateByUrl('/scolarite');
    }
  }

  ngOnInit(): void {
    this.IsUserLogedIn();
    this.IsAdminLogedIn();
  }

}
