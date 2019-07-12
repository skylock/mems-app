import { Component, OnInit } from '@angular/core';
import { Deposition, DepositionService } from '../../shared/services/deposition.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {
  title = 'Materiale MEMS';
  depositionResults: Deposition[];

  constructor(depositionService: DepositionService) {

    this.depositionResults = depositionService.getResults();
    console.log('depositions', this.depositionResults);
  }

  ngOnInit() {
  }

}
