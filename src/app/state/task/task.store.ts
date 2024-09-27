import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { Task } from "src/app/core/models/task.model";

export interface TaskState extends EntityState<Task>{}

@Injectable({providedIn: 'root'})
@StoreConfig({ name: 'tasks' })
export class TaskStore extends EntityStore<TaskState, Task> {
  constructor() {
    super();
  }
}