import { Person } from "./person.model";

export interface Task {
  id              : number;
  title           : string;
  fechaLimite     : string;
  completada      : boolean;
  personaAsignada : Person[];
}