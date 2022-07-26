import { Authority } from "../authority/authority";
import { Register } from "../register/register";

export interface Permiso {
    permisoId: number,
    name: string,
    type: string,
    description: string,
    created: Date,
    updated: Date,
    enabled: boolean,
    personId: number,
    registers: Register[]
}
