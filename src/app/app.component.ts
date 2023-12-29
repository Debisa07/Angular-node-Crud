import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from './model/employee';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee-management-app';

  employees: Employee[] = []

  constructor(private employeService: EmployeeService){}

  ngOnInit(){
    this.employeService.getEmployees().pipe(
      tap((employees) => {
        employees = employees
      })
      )
  }
}
