import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponenets } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WorkbookComponent } from './workbook/workbook.component';
import { AuthGuard } from './auth.guard';
import { TokenIntercepterService } from './token-intercepter.service';
import { NgxImageCompressService } from 'ngx-image-compress';
import { TaskComponent } from './task/task.component';
import { TestComponent } from './test/test.component';
import { SharedModule } from 'shared/shared.module';
import { WorkbookModule } from './workbook/workbook.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponenets,
    WorkbookComponent,
    TaskComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WorkbookModule
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
