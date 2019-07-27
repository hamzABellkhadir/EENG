import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dds-module',
  templateUrl: './dds-module.component.html',
  styleUrls: ['./dds-module.component.css']
})
export class DdsModuleComponent implements OnInit {
  @Input() etudiant;
  constructor() { }

  ngOnInit() {
  }

}
