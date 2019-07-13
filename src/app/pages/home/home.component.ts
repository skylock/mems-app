import { Component } from '@angular/core';
import { AppInfoService } from '../../shared/services';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  galleryDataSource = [{
    name: 'Microscopul de forță atomică AFM-XE 70',
    path: 'https://ww1.prweb.com/prfiles/2007/05/22/528401/PARKXE70AFM.jpg',
    style: 'display: block; max-width:230px; max-height:95px;width: auto; height: auto;'
  }];
  selectedItem = this.galleryDataSource[0];

  constructor(public appInfo: AppInfoService) {

  }
}
