import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { migasInterface } from '../person';

@Component({
  selector: 'app-person-toolbar',
  templateUrl: './person-toolbar.component.html'
})
export class PersonToolbarComponent implements OnInit {

  @Input() entityName: string = "";
  @Output() termEmitter = new EventEmitter<string>();
  @Input() items:migasInterface[]=[];



  
  searchTerm$ = new Subject<string>();
  
  constructor(
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
  }

  public onInput(term: string){
    this.termEmitter.emit(term);
  }

  irNuevoRol(){
    this._router.navigate(['layout','rol']);
  }

}
