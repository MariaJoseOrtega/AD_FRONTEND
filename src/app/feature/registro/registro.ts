import { Comentario } from "../comentario/comentario";

export interface Registro{
  registroActividadId: number,
  actividad: number,
  usuario: string,
  comentario: string,
  created: Date,
  enabled: boolean,
  comentarios: Comentario[]
}
