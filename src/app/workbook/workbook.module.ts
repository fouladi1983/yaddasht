import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './create-task/create-task.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { SharedModule } from 'shared/shared.module';



@NgModule({
  declarations: [
    CreateTaskComponent,
    CreateProjectComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CreateProjectComponent,
    CreateTaskComponent
  ]
})
export class WorkbookModule { }
