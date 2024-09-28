import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AccordionModule } from 'primeng/accordion';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/core/models/task.model';
import { TaskQuery } from 'src/app/state/task/task.query';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TaskService } from 'src/app/core/services/task.service';
import { TaskStateService } from 'src/app/state/task/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    AccordionModule,
    SelectButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  tasks$: Observable<Task[]> = of([]);
  tasks: Task[] = [];
  isMobile: boolean = window.innerWidth < 768;
  formGroup!: FormGroup;
  filterOptions: any[] = [
    { label: 'Todas', value: 'all' },
    { label: 'Completadas', value: 'completed' },
    { label: 'Pendientes', value: 'pending' }
  ];

  constructor(
    private readonly taskQuery: TaskQuery,
    private readonly taskService: TaskStateService
  ) {
    // this.tasks = [
    //   {
    //     id: 1,
    //     title: 'BUGS ECOMMERCE',
    //     fechaLimite: '30-09-2024',
    //     completada: false,
    //     personaAsignada: [
    //       {
    //         id: 1,
    //         nombre: "Imer",
    //         edad: 22,
    //         skill: [
    //           {
    //             id: 1,
    //             descripcion: "Angular"
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     id: 2,
    //     title: 'BUGS APP',
    //     fechaLimite: '30-09-2024',
    //     completada: true,
    //     personaAsignada: [
    //       {
    //         id: 1,
    //         nombre: "Imer",
    //         edad: 22,
    //         skill: [
    //           {
    //             id: 1,
    //             descripcion: "Angular"
    //           }
    //         ]
    //       },
    //       {
    //         id: 2,
    //         nombre: "Antonio",
    //         edad: 20,
    //         skill: [
    //           {
    //             id: 1,
    //             descripcion: "Angular"
    //           },
    //           {
    //             id: 2,
    //             descripcion: "React"
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // ];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    const target = event.target as Window;
    this.isMobile = target.innerWidth < 768;
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      value: new FormControl('all')
    });
    this.tasks$ = this.taskQuery.getTareas();
    this.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    })
  }

  eliminarTarea(idTask: number) {
    this.taskService.eliminarTarea(idTask);
  }
}
