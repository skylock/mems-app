import { Component, OnInit, ViewChild } from '@angular/core';
import { Deposition, DepositionService } from '../../shared/services/deposition.service';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {

  title = 'Materiale MEMS';
  popupTitle: string;
  depositionResults: Deposition[];
  isPopupVisible: boolean;
  filteredData: any;

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  constructor(depositionService: DepositionService) {
    this.depositionResults = depositionService.getResults();
  }

  ngOnInit() {
  }



  drawChart() {
    this.filteredData = this.dataGrid.instance.getVisibleRows().map(row => row.data);
    this.isPopupVisible = true;
  }

  onShown() {
    this.popupTitle = 'Rugozitatea medie';
  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift( {
      location: 'before',
      widget: 'dxButton',
      options: {
        type: 'Normal',
        text: 'Add',
        icon: 'add'
      }
    }, {
      location: 'before',
      widget: 'dxButton',
      options: {
        text: 'Edit',
        icon: 'edit'
      }
    },
      {
        location: 'before',
        widget: 'dxButton',
        options: {
          text: 'Remove',
          icon: 'remove'
        }
    }, {
      location: 'center',
      widget: 'dxButton',
      options: {
        text: 'Chart',
        hint: 'Draw Chart Graph',
        icon: 'chart',
        onClick: this.drawChart.bind(this)
      }
    }, {
      location: 'after',
      widget: 'dxButton',
      options: {
        hint: 'Clear Filters',
        icon: 'refresh',
        onClick: this.refreshDataGrid.bind(this)
      }
    });
  }

  refreshDataGrid() {
    this.dataGrid.instance.refresh();
    this.dataGrid.instance.clearFilter('row');
    this.dataGrid.instance.clearFilter('header');
  }
}
