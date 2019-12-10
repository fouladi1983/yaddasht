import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { UserActivationComponent } from './user-activation/user-activation.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterationComponent,
    UserActivationComponent,
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UsersModule { }
