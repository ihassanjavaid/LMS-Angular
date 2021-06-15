import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-student-view-assignments',
  templateUrl: './student-view-assignments.component.html',
  styleUrls: ['./student-view-assignments.component.css']
})
export class StudentViewAssignmentsComponent implements OnInit {
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
