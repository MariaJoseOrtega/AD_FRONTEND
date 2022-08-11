import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { migasInterface, Rol, RolAuthority } from 'src/app/feature/rol/rol';
import { RolService } from 'src/app/feature/rol/rol.service';
import { AuthorityService } from '../../authority/authority.service';
import { PersonService } from '../../person/person.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html'
})
export class RolComponent implements OnInit {

  autorizacionList:any = [];
  rutas:migasInterface[] = [
    {
      ruta:"/layout/rol-list",
      descripcion:"Rol"
    },
    {
      ruta:"/layout/rol",
      descripcion:"Gestión Roles"
    },
  ];

  idEliminar:string="";

  constructor(
    private readonly _router:Router,
    private rolService: RolService,
    private personService:PersonService,
    private activatedRoute: ActivatedRoute,
    private readonly autService: AuthorityService
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
    this.autorizacionList = [];
    this.rolService.consultarPermisos().subscribe(permisos=>{
      this.autService.findAll().subscribe(at=>{
          for(let a of at ){
            for(let p of permisos){
              if (+a.id === p.authorityid && p.rolid === +this.currentEntity.rolId){
                this.autorizacionList.push(a);
              }
            }
          }
      })
    })
    this.personService.findAll().subscribe(res=>{      
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

    if(+this.currentEntity.rolId !== 0)
    this.rolService.save(this.currentEntity)
    .subscribe(
      (res) => {
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

    if(+this.currentEntity.rolId === 0)
    this.rolService.save(this.currentEntity)
    .subscribe(
      (res) => {
        console.log("caso 2");
        
        for(let c of this.autorizacionList){
          const rolAut:RolAuthority = {
            rolid:res.rolId,
            authorityid:c.id
          }
          this.rolService.saveoRolxAuthority(rolAut).subscribe(guardado=>{
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
          })
        }  
      }
    )
  }
  cancelar(){    
    this._router.navigate(["layout","rol-list"]);
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
        this.currentEntity.fkpersonId = response.fkpersonId;
      }
    )
  }

  selectPerson(id: number){
    this.currentEntity.fkpersonId=""+id;
    }

    buscarList(lista:any, permiso:any){
      for(let l of lista){
        if(l.id === permiso.id)
          return true;
      }
      return false;
    }


    autorizacion(permiso:any){
      
      if(!this.buscarList(this.autorizacionList,permiso)){
        const rolAut:RolAuthority = {
          rolid:this.currentEntity.rolId,
          authorityid:permiso.id
        }
        this.rolService.saveoRolxAuthority(rolAut).subscribe(res=>{
          this.autorizacionList.push(permiso);
        })
      }
        
      }
    quitarAuth(permiso:any){
  
      this.rolService.consultarPermisos().subscribe(p => {
          for(let a of p){
            if(a.rolid === +this.currentEntity.rolId && a.authorityid === +permiso.id){
              this.rolService.deleteByIdRolxAuthority(""+a.id).subscribe(borrar=>{
                let aux = this.autorizacionList;
                this.autorizacionList = [];
                for(let aut of aux){
                  if (aut !== permiso)
                    this.autorizacionList.push(aut);
                }
              });
            }
          }
      })
      
    }




    autorizacion2(permiso:any){ 
        if(!this.buscarList(this.autorizacionList,permiso)){
            this.autorizacionList.push(permiso);
        } 
      }
    quitarAuth2(permiso:any){
      let aux = this.autorizacionList;
      this.autorizacionList = [];
      for(let aut of aux){
        if (aut !== permiso)
          this.autorizacionList.push(aut);
      }  
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
