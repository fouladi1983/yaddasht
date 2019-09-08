import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { ProfileComponent } from './users/profile/profile.component';
import { RegisterationComponent } from './users/registeration/registeration.component';
import { LoginComponent } from './users/login/login.component';
import { UserActivationComponent } from './users/user-activation/user-activation.component';
import { WorkbookComponent } from './workbook/workbook.component';
import { AuthGuard } from './auth.guard';
import { TaskComponent } from './task/task.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'report', component: ReportComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'registeration', component: RegisterationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'user-activation', component: UserActivationComponent},
  { path: 'workbook', component: WorkbookComponent},
  { path: 'task', component: TaskComponent},
  { path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponenets = [
  ReportComponent,
   ProfileComponent,
    HomeComponent
  ];
