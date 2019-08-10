import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { ProfileComponent } from './users/profile/profile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'report', component: ReportComponent },
  { path: 'profile', component: ProfileComponent }
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
