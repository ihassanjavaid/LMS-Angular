import { Component, OnInit } from '@angular/core';
import {Assignment} from "./assignment_model";
import axios from "axios";
import {Router} from "@angular/router";

@Component({
  selector: 'app-teacher-add-assignment',
  templateUrl: './teacher-add-assignment.component.html',
  styleUrls: ['./teacher-add-assignment.component.css']
})
export class TeacherAddAssignmentComponent implements OnInit {
  assignment: Assignment = new Assignment();

  constructor(private router: Router){ }

  ngOnInit(): void {
    this.addAssignment();
  }

  async addAssignment(){
    let res = await axios.post('http://localhost:3000/teacher/addassignment',{
      "title": this.assignment.title,
      "question": this.assignment.question
    });
    this.router.navigateByUrl('teacher/addassignment');
  }
}
