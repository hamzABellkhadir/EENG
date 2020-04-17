import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cds-module',
  templateUrl: './cds-module.component.html',
  styleUrls: ['./cds-module.component.css']
})
export class CdsModuleComponent implements OnInit {
  @Input() etudiant;
  @Input() doc;
  constructor() { }

  ngOnInit() {
  }

}
