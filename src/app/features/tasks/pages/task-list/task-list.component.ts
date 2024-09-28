import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { Observable, of, startWith } from 'rxjs';
import { Task } from 'src/app/core/models/task.model';
import { TaskQuery } from 'src/app/state/task/task.query';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, PanelModule, TableModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<Task[]> = of([]);
  tasks: Task[] = [];
  isMobile: boolean = window.innerWidth < 768;

  constructor (
    private readonly taskQuery: TaskQuery
  ) {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    const target = event.target as Window;
    this.isMobile = target.innerWidth < 768;
  }

  ngOnInit(): void {
    // this.tasks$ = this.taskQuery.getTareas();
    this.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    })
  }
}
