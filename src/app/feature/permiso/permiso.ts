import { Authority } from "../authority/authority";

export interface Permiso {
    permisoId: number,
    name: string,
    type: string,
    description: string,
    created: Date,
    updated: Date,
    enabled: boolean,
    personId: number,
    authorities: Authority[]
}
