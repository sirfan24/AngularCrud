import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/departement.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { fromEventPattern } from 'rxjs';

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

  // default value for ddl
  department = 3;

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
    { id: 5, name: 'Admin' }
  ];
  // partial key word bcoz we are setting only few properties
  datePickerConfig: Partial<BsDatepickerConfig>;

  previewPhoto: boolean = false;

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    email: null,
    phoneNumber: null,
    photoPath: null,
    isActive: null,
    dateOfBirth: null,
    department: 'select'
  };

  constructor() {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(2018, 10, 1),
        maxDate: new Date(2018, 11, 31),
        dateInputFormat: 'MM/DD/YYYY'
      }
    );
  }

  ngOnInit() {}

  saveEmployee(employee: Employee): void {
    console.log(employee);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
