import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { migasInterface, Rol } from 'src/app/feature/rol/rol';
import { RolService } from 'src/app/feature/rol/rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html'
})
export class RolComponent implements OnInit {
  rutas:migasInterface[] = [
    {
      ruta:"/layout/buscar",
      descripcion:"Rol"
    },
    {
      ruta:"/layout/rol",
      descripcion:"Gestionar Rol"
    }
  ];

  idEliminar:string="";

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
    created:"",
    fkpersonId:""
  };
  
  Personas:any=[];

  ngOnInit(): void {
    this.rolService.consultarPersonas().subscribe(res=>{
      this.Personas = res;
    })
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
          this.idEliminar = params.get("id")!;
        }
      }
    )
  }

  public onSelect(id:string){
    console.log(id);
    
    this.currentEntity.fkpersonId = id;
    //this.permisoIdEmitter.emit(parseInt(id));
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
          created:"",
          fkpersonId:""
        };
        this.cancelar();
      }
    )
  }
  cancelar(){    
    this._router.navigate(["layout","buscar"]);
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

  deleteById():void{    
    this.rolService.deleteById(this.idEliminar).subscribe(
      () => {
        console.log("Registro Borrado exitosamente");
        this.cancelar();
        //redireccionar ....
      }
    )
  }
}
