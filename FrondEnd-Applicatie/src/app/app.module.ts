import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './shared/modules/app-routing.module';
import { StudentService } from './shared/services/student.service';

import { AppComponent } from './components/app/app.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { StudentListComponent } from './components/student-list/student-list.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    GroupDetailComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
