import { Skill } from "./skill.model";

export interface Person {
  id      : number;
  nombre  : string;
  edad    : number;
  skill   : Skill[];
}