import { Budget } from '../employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  id: number;
  employee: Budget;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Budget();

    this.id = this.route.snapshot.params.id;

    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        this.employee = data;
        console.log(this.employee)
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['employees']);
  }
}