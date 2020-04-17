import {Component, Input, OnInit,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-att-module',
  templateUrl: './att-module.component.html',
  styleUrls: ['./att-module.component.css']
})
export class AttModuleComponent implements OnInit {

  @Input() etudiant;

  constructor() { }

  ngOnInit() {

  }

}
