import { Person } from "./person.model";

export interface Task {
  id              : number;
  nombre          : string;
  fechaLimite     : string;
  completada      : boolean;
  personaAsignada : Person[];
}