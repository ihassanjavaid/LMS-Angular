import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {config} from "rxjs";

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit {
  public data: Record<string, any>[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  async getAllStudents(): Promise<void> {
    // axios({
    //   method: "GET",
    //   url: 'http://localhost:3000/admin/students',
    //   responseType: 'text'
    // });
    let students = await axios.get('http://localhost:3000/admin/students', {responseType: 'json'});
    this.data = students.data;
  }

}
