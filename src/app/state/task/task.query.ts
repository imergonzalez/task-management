import { QueryEntity } from "@datorama/akita";
import { TaskState, TaskStore } from "./task.store";
import { Task } from "src/app/core/models/task.model";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TaskQuery extends QueryEntity<TaskState, Task> {
  constructor(override store: TaskStore) {
    super(store);
  }

  getTareas() {
    return this.selectAll();
  }

  getTareasCompletadas() {
    return this.selectAll({
      filterBy: task => task.completada
    });
  }

  getTareasPendientes() {
    return this.selectAll({
      filterBy: task => !task.completada
    });
  }
}