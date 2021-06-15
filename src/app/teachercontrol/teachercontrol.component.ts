import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-teachercontrol',
  templateUrl: './teachercontrol.component.html',
  styleUrls: ['./teachercontrol.component.css']
})
export class TeachercontrolComponent implements OnInit {
  public data: Record<string, any>[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getAllTeachers();
  }

  async getAllTeachers(): Promise<void> {
    let teachers = await axios.get('http://localhost:3000/admin/teachers', {responseType: 'json'});
    this.data = teachers.data;
  }

}
