import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { Task } from "src/app/core/models/task.model";

interface TaskState extends EntityState<Task>{}

@StoreConfig({ name: 'tasks' })
export class TaskStore extends EntityStore<TaskState, Task> {
  constructor() {
    super();
  }
}