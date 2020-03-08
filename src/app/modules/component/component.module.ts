import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HomeComponent } from 'src/app/views/home/home.component';
import { ResumeComponent } from 'src/app/views/resume/resume.component';
import { OpenSourceComponent } from 'src/app/views/open-source/open-source.component';
import { PageNotFoundComponent } from 'src/app/views/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResumeComponent,
    OpenSourceComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }
