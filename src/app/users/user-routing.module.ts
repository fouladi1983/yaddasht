import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { UserActivationComponent } from './user-activation/user-activation.component';


const routes: Routes = [
    { path: 'registeration', component: RegisterationComponent},
    { path: 'login', component: LoginComponent},
    { path: 'user-activation', component: UserActivationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
