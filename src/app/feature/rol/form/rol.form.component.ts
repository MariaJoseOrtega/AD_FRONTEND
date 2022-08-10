import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authority } from '../../authority/authority';
import { AuthorityService } from '../../authority/authority.service';
import { Rol } from '../rol';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-rol-form',
  templateUrl: './rol.form.component.html'
})
export class RolFormComponent implements OnInit {

  constructor(
    private rolService: RolService,
    private authorityService: AuthorityService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  currentEntity: Rol =
  {
    rolId: 0,
    name: "",
    dni: "",
    created: new Date(),
    enabled: true,
    cityId: 0,
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
    this.rolService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          rolId: 0,
          name: "",
          dni: "",
          created: new Date(),
          enabled: true,
          cityId: 0,
          authorities: []
        };
        this.router.navigate(['/layout/rol-list']);
      }
    )
  }

  findById(id: number):void {
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
  }

  deleteById():void{
    this.rolService.deleteById(this.currentEntity.rolId).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

  removeAuthority(id: number):void {

    this.currentEntity.authorities =
    this.currentEntity.authorities.filter(
      (item) => item.id != id
    );
  }

}
