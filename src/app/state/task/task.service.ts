import { Injectable } from "@angular/core";
import { TaskStore } from "./task.store";
import { Task } from "src/app/core/models/task.model";
import { Person } from "src/app/core/models/person.model";
import { Skill } from "src/app/core/models/skill.model";

@Injectable({ providedIn: 'root' })
export class TaskStateService {
  constructor(private taskStore: TaskStore) { }

  agregarTarea(task: Task) {
    this.taskStore.add(task);
  }

  completarTarea(taskId: number) {
    this.taskStore.update(taskId, { completada: true });
  }

  eliminarTarea(taskId: number) {
    this.taskStore.remove(taskId);
  }

  asignarPersona(taskId: number, person: Person) {
    this.taskStore.update(taskId, (task) => ({
      ...task,
      personaAsignada: [...task.personaAsignada, person]
    }));
  }

  eliminarPersona(taskId: number, personId: number) {
    this.taskStore.update(taskId, (task) => ({
      ...task,
      personaAsignada: task.personaAsignada.filter(
        p => p.id !== personId
      )
    }));
  }

  agregarHabilidadPersona(
    taskId: number, personId: number, skill: Skill
  ) {
    this.taskStore.update(taskId, (task) => ({
      ...task,
      personaAsignada: task.personaAsignada.map(person =>
        person.id === personId
          ? { ...person, skill: [...person.skill, skill] }
          : person
      )
    }));
  }

  eliminarHabilidadPersona(
    taskId: number, personId: number, skillId: number
  ) {
    this.taskStore.update(taskId, (task) => ({
      ...task,
      personaAsignada: task.personaAsignada.map(person =>
        person.id === personId
          ? { ...person, skill: person.skill.filter(skill => skill.id !== skillId) }
          : person
      )
    }));
  }
}