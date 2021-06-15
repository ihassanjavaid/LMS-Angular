import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {StartComponent} from "./start/start.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {StudentComponent} from "./student/student.component";
import {AdminComponent} from "./admin/admin.component";
import {StudentcontrolComponent} from "./studentcontrol/studentcontrol.component";
import {ClasscontrolComponent} from "./classcontrol/classcontrol.component";
import {TeachercontrolComponent} from "./teachercontrol/teachercontrol.component";
import {ViewstudentsComponent} from "./viewstudents/viewstudents.component";
import {AddstudentsComponent} from "./addstudents/addstudents.component";
import {TeacherViewAssignmentsComponent} from "./teacher-view-assignments/teacher-view-assignments.component";
import {TeacherAddAssignmentComponent} from "./teacher-add-assignment/teacher-add-assignment.component";
import {StudentViewAssignmentsComponent} from "./student-view-assignments/student-view-assignments.component";

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'teacher', component: TeacherComponent},
  {path: 'student', component: StudentComponent},
  {path: 'admin/studentcontrol', component: StudentcontrolComponent},
  {path: 'admin/classcontrol', component: ClasscontrolComponent},
  {path: 'admin/teachercontrol', component: TeachercontrolComponent},
  {path: 'admin/studentcontrol/viewstudents', component: ViewstudentsComponent},
  {path: 'admin/studentcontrol/addstudents', component: AddstudentsComponent},
  {path: 'teacher/viewassignments', component: TeacherViewAssignmentsComponent},
  {path: 'teacher/addassignment', component: TeacherAddAssignmentComponent},
  {path: 'student/viewassignments', component: StudentViewAssignmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
