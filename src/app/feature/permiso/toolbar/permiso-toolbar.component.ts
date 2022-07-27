import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-permiso-toolbar',
  templateUrl: './permiso-toolbar.component.html',
})
export class PermisoToolbarComponent implements OnInit {

  @Input() entityName: string ="" ;
  @Output() termEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onInput(term: string){
    this.termEmitter.emit(term);
  }

}
