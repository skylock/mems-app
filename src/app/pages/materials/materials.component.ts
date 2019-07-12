import { Component, OnInit, ViewChild } from '@angular/core';
import { Deposition, DepositionService } from '../../shared/services/deposition.service';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  title = 'Materiale MEMS';
  depositionResults: Deposition[];

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  constructor(depositionService: DepositionService) {

    this.depositionResults = depositionService.getResults();
    console.log('depositions', this.depositionResults);
  }

  ngOnInit() {
  }

  clearFilter(filterType: string) {
    this.dataGrid.instance.clearFilter(filterType);
  }
}
