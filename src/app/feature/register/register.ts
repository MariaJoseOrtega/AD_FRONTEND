//import { Timestamp } from "rxjs";
import { Coment } from "../coment/coment";

export interface Register {
    registerId: number,
    detalle: string,
    fechaHoraDesde: Date,
    fechaHoraHasta: Date,
    created: Date,
    enabled: boolean,
    permisoId: number,
    coments: Coment[]


}
