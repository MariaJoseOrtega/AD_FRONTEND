import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rol-toolbar',
  templateUrl: './rol-toolbar.component.html'
})
export class RolToolbarComponent implements OnInit {

  @Input() entityName: string = "";
  @Output() termEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onInput(term: string){
    this.termEmitter.emit(term);
  }

}
