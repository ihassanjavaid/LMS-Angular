import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Credential} from "./credential_model";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public cred: Credential = new Credential();

  constructor(private router: Router) { }

  ngOnInit(): void {
    //this.navigate();
  }

  navigate() {
    if (this.cred.username == "admin" && this.cred.password == "123456"){
      this.router.navigateByUrl('admin')
    }
    else if (this.cred.username == "teacher" && this.cred.password == "123456"){
      this.router.navigateByUrl('teacher')
    }
    else if (this.cred.username == "student" && this.cred.password == "123456"){
      this.router.navigateByUrl('student')
    }
    // else {
    //   this.router.navigateByUrl('#')
    // }
  }
}
