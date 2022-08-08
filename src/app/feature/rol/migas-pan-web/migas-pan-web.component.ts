import { Component, Input, OnInit } from '@angular/core';
import { migasInterface } from '../rol';

@Component({
  selector: 'app-migas-pan-web',
  templateUrl: './migas-pan-web.component.html',
  styleUrls: ['./migas-pan-web.component.css']
})
export class MigasPanWebComponent implements OnInit {

  @Input() items:migasInterface[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
