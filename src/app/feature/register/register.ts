import { Timestamp } from "rxjs";

export interface Register {
    registerId: number,
    detalle: string,
    fechaHoraDesde: Date,
    fechaHoraHasta: Date,
    created: Date,
    enabled: boolean,
    permisoId: number
}
