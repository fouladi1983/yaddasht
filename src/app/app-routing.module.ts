import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { ProfileComponent } from './users/profile/profile.component';
import { WorkbookComponent } from './workbook/workbook.component';
import { AuthGuard } from './auth.guard';
import { TaskComponent } from './task/task.component';
import { TestComponent } from './test/test.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'report', component: ReportComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'workbook', component: WorkbookComponent},
  { path: 'task', component: TaskComponent},
  { path: 'test', component: TestComponent},
  { path: 'users', loadChildren: './users/users.module#UsersModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponenets = [
  ReportComponent,
   ProfileComponent,
    HomeComponent
  ];
