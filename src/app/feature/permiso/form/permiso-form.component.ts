import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Permiso } from 'src/app/feature/permiso/permiso';
import { PermisoService } from 'src/app/feature/permiso/permiso.service';
import { AuthorityService } from '../../authority/authority.service';
import { RegisterService } from '../../register/register.service';

@Component({
  selector: 'app-permiso',
  templateUrl: './permiso-form.component.html'
})
export class PermisoFormComponent implements OnInit {

  constructor(
    private permisoService: PermisoService,
    private activatedRoute: ActivatedRoute,
    private authorityService: AuthorityService,
    private registerService: RegisterService,
    private router:Router
  ) { }

  currentEntity: Permiso =
  {
    permisoId: 0,
    name: "",
    type: "",
    description: "",
    created: new Date(),
    updated: new Date(),
    enabled: false,
    personId: 0,
    registers: []
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
          enabled: true,
          personId: 0.,
          registers: []
        };
      }
    )
  }

  findById(id: number):void {
    this.permisoService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.registers.forEach(
          (auth) => {
            this.registerService.findById(auth.registerId).subscribe(
              (item) => auth.detalle = item.detalle
            )
          }
        )
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

  selectPerson(id: number){
  this.currentEntity.personId=id;
  }

  removeRegister(id: number):void {

    this.currentEntity.registers =
    this.currentEntity.registers.filter(
      (item) => item.registerId != id
    );
  }

}
