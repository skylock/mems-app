import { Component, OnInit, ViewChild } from '@angular/core';
import { Deposition, DepositionService } from '../../shared/services/deposition.service';
import { DxDataGridComponent } from 'devextreme-angular';
import DevExpress from 'devextreme/bundles/dx.all';

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
  }

  ngOnInit() {
  }

  clearFilters() {
    this.dataGrid.instance.clearFilter('row');
    this.dataGrid.instance.clearFilter('header');
  }

  drawChart() {
    const filteredRows = this.dataGrid.instance.getVisibleRows().map(row => row.data);
    console.error(filteredRows);
  }
}
