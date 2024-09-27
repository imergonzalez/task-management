// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { TaskFormComponent } from './app/features/tasks/pages/task-form/task-form.component';
import { AppComponent } from './app/app.component';

const routes = [
  { path: '', component: TaskFormComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Proveedor de enrutador
  ]
});
