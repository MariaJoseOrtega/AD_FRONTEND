import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Coment } from '../coment';
import { ComentService } from '../coment.service';

@Component({
  selector: 'app-coment-search',
  templateUrl: './coment-search.component.html',
})
export class ComentSearchComponent implements OnInit {

  constructor(
    private comentService: ComentService
    ) {}
    coments: Coment[] = [];

    @Output() comentEmitter = new EventEmitter<Coment>();
  ngOnInit(): void {
  }

  onInput(term: string): void {
    if(term.length>=2){
      this.comentService.findByName(term).subscribe(
        (response) => this.coments = response
      )
    }
    if(term.length===0){
      this.coments = [];
    }
  }

  onSelect(coment: Coment): void {
    this.comentEmitter.emit(coment);
  }
}
