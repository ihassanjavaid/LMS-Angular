import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-teacher-view-assignments',
  templateUrl: './teacher-view-assignments.component.html',
  styleUrls: ['./teacher-view-assignments.component.css']
})
export class TeacherViewAssignmentsComponent implements OnInit {
  public data: Record<string, any>[] = [];

  constructor() { }

  ngOnInit(): void {
    this.viewAssignments();
  }

  async viewAssignments(): Promise<void> {
    let assignments = await axios.get('http://localhost:3000/teacher/viewassignments', {
      responseType: 'json'
    });
    this.data = assignments.data;
  }
}
