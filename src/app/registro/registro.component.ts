import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Registro } from './registro';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {

  constructor(
    private registroService:RegistroService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Registro =
  {
    registroActividadId: 0,
    actividad: 0,
    usuario: "",
    comentario: "",
    created: new Date(),
    enabled: true
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
          enabled: true
        };
      }
    )
  }

  findById(id: number):void{
    this.registroService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    this.registroService.deleteById(this.currentEntity.registroActividadId).subscribe(
      () =>{
        console.log("borrando..");
      }
    )
  }

}
