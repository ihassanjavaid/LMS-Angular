import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-classcontrol',
  templateUrl: './classcontrol.component.html',
  styleUrls: ['./classcontrol.component.css']
})
export class ClasscontrolComponent implements OnInit {
  public data: Record<string, any>[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getAllClasses();
  }

  async getAllClasses(): Promise<void> {
    let teachers = await axios.get('http://localhost:3000/admin/classes', {responseType: 'json'});
    this.data = teachers.data;
  }
}
