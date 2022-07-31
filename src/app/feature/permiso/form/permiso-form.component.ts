import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Permiso } from 'src/app/feature/permiso/permiso';
import { PermisoService } from 'src/app/feature/permiso/permiso.service';
import { AuthorityService } from '../../authority/authority.service';

@Component({
  selector: 'app-permiso',
  templateUrl: './permiso-form.component.html'
})
export class PermisoFormComponent implements OnInit {

  constructor(
    private permisoService: PermisoService,
    private activatedRoute: ActivatedRoute,
    private authorityService: AuthorityService,
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
    authorities: []
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
          authorities: []
        };
      }
    )
  }

  findById(id: number):void {
    this.permisoService.findById(id).subscribe(
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

  removeAuthority(id: number):void {

    this.currentEntity.authorities =
    this.currentEntity.authorities.filter(
      (item) => item.id != id
    );
  }

}
