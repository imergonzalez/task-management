import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './shared/components/task-list/task-list.component';
import { TaskFormComponent } from './shared/components/task-form/task-form.component';
import { PersonFormComponent } from './shared/components/person-form/person-form.component';
import { SkillFormComponent } from './shared/components/skill-form/skill-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent,
    PersonFormComponent,
    SkillFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
