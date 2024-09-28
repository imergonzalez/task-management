// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { TaskListComponent } from './app/features/tasks/pages/task-list/task-list.component';

const routes = [
  { path: '', component: TaskListComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Proveedor de enrutador
  ]
});
