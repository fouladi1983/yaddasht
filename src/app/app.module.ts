import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponenets } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterationComponent } from './users/registeration/registeration.component';
import { HttpClientModule } from '@angular/common/http';
import { UserActivationComponent } from './users/user-activation/user-activation.component';
import { WorkbookComponent } from './workbook/workbook.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponenets,
    LoginComponent,
    RegisterationComponent,
    UserActivationComponent,
    WorkbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
