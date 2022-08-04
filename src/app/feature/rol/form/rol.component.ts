import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rol } from 'src/app/feature/rol/rol';
import { RolService } from 'src/app/feature/rol/rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html'
})
export class RolComponent implements OnInit {

  constructor(
    private rolService: RolService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Rol=
  {

    rolId:0,
    name:"",
    admin:true,
    enable:true,
    archived:true,
    updated:new Date(),
    created:new Date()

  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save():void {
    console.table(this.currentEntity);
    this.rolService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          rolId:0,
          name:"",
          admin:true,
          enable:true,
          archived:true,
          updated:new Date(),
          created:new Date()
        };
      }
    )
  }

  findById(id: number):void {
    this.rolService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    this.rolService.deleteById(this.currentEntity.rolId).subscribe(
      () => {
        console.log("Registro Borrado exitosamente");
        //redireccionar ....
      }
    )
  }

}
