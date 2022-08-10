import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/feature/rol/rol';
import { RolService } from 'src/app/feature/rol/rol';

@Component({
  selector: 'app-rol',
  templateUrl: './rol-form.component.html'
})
export class RolformComponent implements OnInit {

  constructor(
    private rolService: RolService,
    private activatedRoute: ActivatedRoute
    private router:Router
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

  /*findById(id: number):void {
    this.rolService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.authorities.forEach(
          (auth) => {
            this.authorityService.findById(auth.id).subscribe(
              (item) => auth.name = item.name
            )
          }
        )
      }
    )
  } */

  deleteById():void{
    this.rolService.deleteById(this.currentEntity.rolId).subscribe(
      () => {
        console.log("Registro Borrado exitosamente");
        //redireccionar ....
      }
      )
  }

      selectPerson(id: number){
        this.currentEntity.personId=id;
        }
}
