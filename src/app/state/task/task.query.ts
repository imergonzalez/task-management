import { QueryEntity } from "@datorama/akita";
import { TaskState, TaskStore } from "./task.store";
import { Task } from "src/app/core/models/task.model";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TaskQuery extends QueryEntity<TaskState, Task> {
  constructor(override store: TaskStore) {
    super(store);
  }

  getByFilter(filter: string) {
    if (filter == 'all') {
      return this.getTareas();
    } else if (filter == 'completed') {
      return this.getTareasCompletadas();
    }

    return this.getTareasPendientes();
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