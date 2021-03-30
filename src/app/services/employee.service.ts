import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<any> {
    return this.http.get('https://tworks-exercise-api.herokuapp.com/employee/list');
  }

  public addEmployee(employee: Employee): Observable<any> {
    return this.http.post('https://tworks-exercise-api.herokuapp.com/employee/add', employee);
  }

  public deleteEmployee(id: string): Observable<any> {
    return this.http.delete(('https://tworks-exercise-api.herokuapp.com/employee/delete/').concat(id));
  }
}

export class Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
