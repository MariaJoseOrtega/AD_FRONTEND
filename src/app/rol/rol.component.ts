import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { migasInterface } from '../interfaces/migas.interface';
import { Rol } from './rol';
import { RolService } from './rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html'
})
export class RolComponent implements OnInit {

  rutas:migasInterface[] = [
    {
      ruta:"Roles",
      descripcion:"Inicio Roles"
    },
    {
      ruta:"consultar",
      descripcion:"Consultar Roles"
    },
    {
      ruta:"rol",
      descripcion:"Gestionar Rol"
    }
  ];

  constructor(
    private readonly _router:Router,
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
    updated:"",
    created:""

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
          updated:"",
          created:""
        };
        this.cancelar();
      }
    )
  }
  cancelar(){
    this._router.navigate(["consultar"]);
  }

  findById(id: number):void {
    this.rolService.findById(id).subscribe(
      (response) => {
        this.currentEntity.rolId = response.rolId;
        this.currentEntity.name = response.name;
        this.currentEntity.admin = response.admin;
        this.currentEntity.enable = response.enable;
        this.currentEntity.archived = response.archived;
        this.currentEntity.updated = new Date(response.updated).toISOString().split('T')[0];
        this.currentEntity.created = new Date(response.created).toISOString().split('T')[0];
      }
    )
  }
}
