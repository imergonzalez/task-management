import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TaskFormComponent } from "../../../tasks/pages/task-form/task-form.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule, TaskFormComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  visible: boolean = false;

  agregarTarea() {
    this.visible = true;
  }
}
