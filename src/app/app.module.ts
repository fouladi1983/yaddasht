import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponenets } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterationComponent } from './users/registeration/registeration.component';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserActivationComponent } from './users/user-activation/user-activation.component';
import { WorkbookComponent } from './workbook/workbook.component';
import { AuthGuard } from './auth.guard';
import { TokenIntercepterService } from './token-intercepter.service';
import { NgxImageCompressService } from 'ngx-image-compress';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponenets,
    LoginComponent,
    RegisterationComponent,
    UserActivationComponent,
    WorkbookComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DpDatePickerModule
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
