import { Component } from '@angular/core';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {
  employee: any;
  colCountByScreen: Object;

  constructor() {
    this.employee = {
      ID: 7,
      FirstName: 'Emanuil',
      LastName: 'Copil',
      Prefix: 'Mr.',
      Position: 'Student',
      Picture: 'men/79.jpg',
      BirthDate: new Date('1980/11/15'),
      HireDate: new Date('2019/07/15'),
      /* tslint:disable-next-line:max-line-length */
      Notes: '',
      Address: 'Bulevardul Muncii, nr. 103-105, 400641, Cluj-Napoca, România'
    };
  }
}
