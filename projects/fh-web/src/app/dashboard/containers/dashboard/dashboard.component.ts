import { Component, OnInit } from '@angular/core';

import { Person } from '../../models/person';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  person: Person;

  constructor() {}

  ngOnInit() {
    this.person = {
      name: 'Sergiu',
      age: 25
    };
  }

  onClick(): void {
  }

  onReset(): void {
    this.person.name = 'zz from child';
  }

  changeMutable(): void {
    this.person.name = 'ZZ from parent';
  }

  changeImmutable(): void {
    this.person = {
      ...this.person,
      name: 'Z from parent'
    };
  }
}
