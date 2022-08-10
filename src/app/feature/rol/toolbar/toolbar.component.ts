import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { migasInterface } from '../rol';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  @Input() items:migasInterface[]=[];
  searchTerm$ = new Subject<string>();
  constructor(
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
  }

  irNuevoRol(){
    this._router.navigate(['layout','rol']);
  }

}
