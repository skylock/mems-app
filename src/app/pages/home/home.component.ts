import { Component } from '@angular/core';
import { AppInfoService } from '../../shared/services';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  constructor(public appInfo: AppInfoService) {

  }
}
