import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplasePipe } from './pipe/replase.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { CourceInfoComponent } from './courses/cource-info.component';
import { TestBed } from '@angular/core/testing';
import { TestComponent } from './teste/teste.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplasePipe,
    NavBarComponent,
    Error404Component,
    CourceInfoComponent,
    TestComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path:'courses/info/:id', component: CourceInfoComponent
      },
      {
        path:'courses/pdf', component: TestComponent
      },
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      }, 
      {
        path: '**', component: Error404Component 
      },
      
      
    
     
    ]),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
