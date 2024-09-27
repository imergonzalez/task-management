import { Injectable } from "@angular/core";
import { TaskStore } from "./task.store";
import { Task } from "src/app/core/models/task.model";

@Injectable({ providedIn: 'root' })
export class TaskStateService {
  constructor(private taskStore: TaskStore) {}

  agregarTarea(task: Task) {
    this.taskStore.add(task);
  }

  completarTarea(id: number) {
    this.taskStore.update(id, { completada: true });
  }
}