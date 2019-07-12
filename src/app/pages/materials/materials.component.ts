import { Component, OnInit } from '@angular/core';
import { Deposition, DepositionService } from '../../shared/services/deposition.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {
  title = 'Materiale MEMS';
  dataSource: Deposition[];

  constructor(service: DepositionService) {

    this.dataSource = service.getResults();
    console.log('depuneri', this.dataSource);
  }

  ngOnInit() {
  }

}
