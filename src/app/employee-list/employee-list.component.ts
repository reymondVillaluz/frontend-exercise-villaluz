import { Component, OnInit } from '@angular/core';
import {Employee, EmployeeService} from '../services/employee.service';
import {ToastService} from '../services/toast.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employees: Array<Employee> = new Array<Employee>();
  constructor(private employeeService: EmployeeService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  delete(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(result => {
      this.toastService.show(result.msg, { classname: 'bg-success text-light', delay: 3000 });
      this.loadEmployees();
    }, (err) => {
      this.toastService.show(err.error.msg, { classname: 'bg-danger text-light', delay: 3000 });
    })
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe(result => {
      this.employees = result;
    });
  }

}
