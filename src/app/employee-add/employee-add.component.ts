import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Employee, EmployeeService} from '../services/employee.service';
import {ToastService} from '../services/toast.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  public formGroup:FormGroup;

  constructor(private employeeService: EmployeeService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      id: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl()
    })
  }

  saveEmployee() {
    let employee: Employee = new Employee();
    employee.id = this.formGroup.controls['id'].value;
    employee.lastName = this.formGroup.controls['lastName'].value;
    employee.firstName = this.formGroup.controls['firstName'].value;
    employee.email = this.formGroup.controls['email'].value;
    this.employeeService.addEmployee(employee).subscribe(response => {
        this.toastService.show(response.msg, { classname: 'bg-success text-light', delay: 3000 });
    }, (err) => {
      this.toastService.show(err.error.msg, { classname: 'bg-danger text-light', delay: 3000 });
    });
  }

}
