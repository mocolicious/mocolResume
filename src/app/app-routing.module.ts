import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { OpenSourceComponent } from './views/open-source/open-source.component';
import { ResumeComponent } from './views/resume/resume.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'open-source', component: OpenSourceComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
