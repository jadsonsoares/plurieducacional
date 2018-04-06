import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LessonComponent } from './pages/lesson/lesson.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard, PageHeaderModule, LessonService, LessonCardModule, LessonSearchPipe } from './shared';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LessonComponent,
    LessonSearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    PageHeaderModule,
    LessonCardModule,
    NgxPaginationModule
  ],
  providers: [AuthGuard, LessonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
