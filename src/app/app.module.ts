import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonFormComponent } from './features/people/pages/person-form/person-form.component';
import { SkillFormComponent } from './features/shared/components/skill-form/skill-form.component';
import { TaskFormComponent } from './features/tasks/pages/task-form/task-form.component';
import { TaskListComponent } from './features/tasks/pages/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
