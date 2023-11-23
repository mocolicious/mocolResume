import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { OpenSourceComponent } from './views/open-source/open-source.component';
import { ResumeComponent } from './views/resume/resume.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';


const routes: Routes = [
    { path: '', loadComponent: () => import('./views/home/home.component').then(c => c.HomeComponent) },
    { path: 'resume', loadComponent: () => import('./views/resume/resume.component').then(c => c.ResumeComponent) },
    { path: 'open-source', loadComponent: () => import('./views/open-source/open-source.component').then(c => c.OpenSourceComponent)},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
