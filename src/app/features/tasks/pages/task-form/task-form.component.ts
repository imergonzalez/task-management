import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskStore } from 'src/app/state/task/task.store';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule
  ],
  providers: [TaskStore],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent{

  @Input({required: true}) visible: boolean = false;

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