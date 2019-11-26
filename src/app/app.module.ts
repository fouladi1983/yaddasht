import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponenets } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WorkbookComponent } from './workbook/workbook.component';
import { AuthGuard } from './auth.guard';
import { TokenIntercepterService } from './token-intercepter.service';
import { NgxImageCompressService } from 'ngx-image-compress';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { TaskComponent } from './task/task.component';
import { CreateTaskComponent } from './workbook/create-task/create-task.component';
import { CreateProjectComponent } from './workbook/create-project/create-project.component';
import { TestComponent } from './test/test.component';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [
    AppComponent,
    routingComponenets,
    WorkbookComponent,
    TaskComponent,
    CreateTaskComponent,
    CreateProjectComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DpDatePickerModule,
    UsersModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true
    },
    NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
