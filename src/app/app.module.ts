import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { StartComponent } from './start/start.component';
import { StudentcontrolComponent } from './studentcontrol/studentcontrol.component';
import { TeachercontrolComponent } from './teachercontrol/teachercontrol.component';
import { ClasscontrolComponent } from './classcontrol/classcontrol.component';
import { ViewstudentsComponent } from './viewstudents/viewstudents.component';
import { AddstudentsComponent } from './addstudents/addstudents.component';
import { TeacherViewAssignmentsComponent } from './teacher-view-assignments/teacher-view-assignments.component';
import { TeacherAddAssignmentComponent } from './teacher-add-assignment/teacher-add-assignment.component';
import { StudentViewAssignmentsComponent } from './student-view-assignments/student-view-assignments.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TeacherComponent,
    StudentComponent,
    StartComponent,
    StudentcontrolComponent,
    TeachercontrolComponent,
    ClasscontrolComponent,
    ViewstudentsComponent,
    AddstudentsComponent,
    TeacherViewAssignmentsComponent,
    TeacherAddAssignmentComponent,
    StudentViewAssignmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
