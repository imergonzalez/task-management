import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskStateService } from 'src/app/state/task/task.service';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/core/models/task.model';
import { TaskQuery } from 'src/app/state/task/task.query';
import { TaskStore } from 'src/app/state/task/task.store';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [TaskStore],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent{

  // taskForm: FormGroup;
  // tasks$: Observable<Task[]> = of([]);

  // constructor(
  //   private builder: FormBuilder,
  //   private taskStateService: TaskStateService,
  //   private taskQuery: TaskQuery
  // ) {
  //   this.taskForm = builder.group({
  //     title: ['', Validators.required]
  //   });
  // }

  // ngOnInit(): void {
  //   this.tasks$ = this.taskQuery.selectAll();
  // }

  // onSubmit() {
  //   const newTask = this.taskForm.value;

  //   this.taskStateService.agregarTarea(newTask);
  //   this.taskForm.reset();
  // }

  // completarTarea(id: number) {
  //   this.taskStateService.completarTarea(id);
  // }
}