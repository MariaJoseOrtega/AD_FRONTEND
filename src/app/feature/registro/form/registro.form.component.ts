import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registro } from '../registro';
import { RegistroService } from '../registro.service';
import { Comentario } from '../../comentario/comentario';
import { ComentarioService } from '../../comentario/comentario.service';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro.form.component.html',
})
export class RegistroFormComponent implements OnInit {

  constructor(
    private registroService:RegistroService,
    private comentarioService: ComentarioService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
  ) { }

  currentEntity: Registro =
  {
    registroActividadId: 0,
    actividad: 0,
    usuario: "",
    comentario: "",
    created: new Date(),
    enabled: true,
    comentarios: []
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if(params.get("id")){
            this.findById (parseInt(params.get("id")!));
        }
       }
      )
  }

  save():void{
    console.table(this.currentEntity);
    this.registroService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          registroActividadId: 0,
          actividad: 0,
          usuario: "",
          comentario: "",
          created: new Date(),
          enabled: true,
          comentarios: []
        };
      }
    )
  }

  findById(id: number):void {
    this.registroService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.comentarios.forEach(
          (auth) => {
            this.comentarioService.findById(auth.comentarioId).subscribe(
              (item) => auth.opinion = item.opinion
            )
          }
        )
      }
    )
  }

  deleteById():void{
    this.registroService.deleteById(this.currentEntity.registroActividadId).subscribe(
      () =>{
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

  removeComentario(id: number):void {

    this.currentEntity.comentarios =
    this.currentEntity.comentarios.filter(
      (item) => item.comentarioId != id
    );
  }

}
