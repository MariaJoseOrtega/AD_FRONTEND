export interface Rol {
  rolId:number,
  name:string,
  admin:boolean,
  enable:boolean,
  archived:boolean,
  updated:string,
  created: string,
  fkpersonId:string
}

export interface RolAuthority {
  id?:number,
  rolid?:number,
  authorityid?:number,
}


export interface migasInterface {
  ruta:string,
  descripcion:string
}

export interface Persona {
   personId:string,
     name:String,
     dni:String,
     created:string,
     updated:string,
     enabled:boolean
}