import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // Radio button checked by default
  contactPreference = 'email';

  // check box is checked by default
  isActive = true;

  constructor() {}

  ngOnInit() {}

  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value);
  }
}
