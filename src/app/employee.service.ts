import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './model/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  baseUrl = 'localhost://500';

  constructor(private http: HttpClient) {}

  createEmployee(Employee: Employee) {
    return this.http.post(this.baseUrl, {
      Employee,
    });
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl)
  }

  updateBook(Employee: Employee) {
    return this.http.put(this.baseUrl, {
      Employee,
    });
  }

  deleteBook(id: number) {
    return this.http.delete<any>(
      `${this.baseUrl}/${id}`,
    );
  }
}
