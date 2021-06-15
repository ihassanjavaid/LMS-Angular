import { Component, OnInit } from '@angular/core';
import { Student } from "./student_model";
import axios from "axios";

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent implements OnInit {
  student: Student = new Student();

  constructor() { }

  ngOnInit(): void {
  }

  async addstudent() {
    if (this.student.name != ''){
      let res = await axios.post('http://localhost:3000/admin/addstudent',{
        "name": this.student.name,
        "rollno": this.student.rollno
      });

      if (res.status == 200) {

      } else {
        console.log("error");
      }
    }
    location.reload();
  }

}
