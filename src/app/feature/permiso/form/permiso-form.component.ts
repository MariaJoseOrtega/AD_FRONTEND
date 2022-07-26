import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Permiso } from 'src/app/feature/permiso/permiso';
import { PermisoService } from 'src/app/feature/permiso/permiso.service';

@Component({
  selector: 'app-permiso',
  templateUrl: './permiso-form.component.html'
})
export class PermisoFormComponent implements OnInit {

  constructor(
    private permisoService: PermisoService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Permiso = 
  {
    permisoId: 0,
    name: "",
    type: "",
    description: "",
    created: new Date(),
    updated: new Date(),
    enabled: false
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
    this.permisoService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity = 
        {
          permisoId: 0,
          name: "",
          type: "",
          description: "",
          created: new Date(),
          updated: new Date(),
          enabled: true
        };
      }
    )
  }

  findById(id: number):void {
    this.permisoService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    this.permisoService.deleteById(this.currentEntity.permisoId).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

}
