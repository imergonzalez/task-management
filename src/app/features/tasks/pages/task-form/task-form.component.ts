import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskStore } from 'src/app/state/task/task.store';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { Person } from 'src/app/core/models/person.model';
import { Skill } from 'src/app/core/models/skill.model';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TaskStateService } from 'src/app/state/task/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    ToastModule
  ],
  providers: [TaskStore, MessageService],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  
  @Input({required: true}) visible: boolean = false;
  @Output() closeDialog = new EventEmitter<boolean>();

  taskForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private message: MessageService,
    private taskService: TaskStateService
  ) {
    this.taskForm = new FormGroup({
      title: new FormControl<string>('', [Validators.required]),
      fechaLimite: new FormControl<string>('', [Validators.required]),
      personaAsignada: new FormArray<Person[] | any>([], [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  get personaAsignada(): FormArray {
    return this.taskForm.get('personaAsignada') as FormArray;
  }

  crearPersona(): FormGroup {
    return new FormGroup({
      nombre: new FormControl<string | null>(null, [Validators.required]),
      edad: new FormControl<number>(0, [Validators.required]),
      skill: new FormArray<Skill[] | any>([], [Validators.required])
    });
  }

  agregarPersona() {
    this.personaAsignada.push(this.crearPersona());
  }

  removerPersona(index: number) {
    this.personaAsignada.removeAt(index);
  }

  createSkill(): FormGroup {
    return new FormGroup({
      descripcion: new FormControl<string>('', [Validators.required])
    });
  }

  getSkills(personIndex: number): FormArray {
    return this.personaAsignada
          .at(personIndex)
          .get('skill') as FormArray;
  }

  agregarSkill(personIndex: number) {
    this.getSkills(personIndex).push(this.createSkill());
  }

  removerSkill(personIndex: number, skillIndex: number) {
    this.getSkills(personIndex).removeAt(skillIndex);
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.message.add({ severity: 'success', summary: 'Exito', detail: 'Tarea creada' });
      let data = this.taskForm.value;
      const arrayConId = data.personaAsignada.map((obj: any, index: any) => ({
        ...obj,
        id: Date.now() + index,
        skill: obj.skill.map((subItem: any, subIndex: any) => ({
          ...subItem,
          id: Date.now() + index + subIndex
        }))
      }));

      data = {...data, personaAsignada: arrayConId, id: Date.now()}

      console.log(data);
      this.taskService.agregarTarea(data);
      this.onClose();
      this.taskForm.reset();
    } else {
      this.message.add({ severity: 'danger', summary: 'Error', detail: 'Rellene todos los campos' });
      console.log("Aun es inválido")
    }
  }

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

  onClose() {
    this.closeDialog.emit(false);
  }
}