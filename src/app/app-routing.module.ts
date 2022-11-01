import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: 'cv', component: CvComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
