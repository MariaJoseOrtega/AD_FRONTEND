import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Comentario } from '../comentario';
import { ComentarioService } from '../comentario.service';

@Component({
  selector: 'app-comentario-agregar',
  templateUrl: './comentario-agregar.component.html'
})
export class ComentarioAgregarComponent implements OnInit {

  constructor(
    private comentarioService: ComentarioService
  ) { }

  comentarios: Comentario[] = [];

  @Output() comentarioEmitter = new EventEmitter<Comentario>();

  ngOnInit(): void {}

  onInput(term: string):void {
    if (term.length>=2){
      this.comentarioService.findByComentario(term).subscribe(
        (response) => this.comentarios = response
      )
    }
    if (term.length===0){
      this.comentarios = [];
    }

  }

  onSelect(comentario: Comentario):void {
    this.comentarioEmitter.emit(comentario);
  }

}
