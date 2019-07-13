import { Component, OnInit, ViewChild } from '@angular/core';
import { Deposition, DepositionService } from '../../shared/services/deposition.service';
import { DxDataGridComponent } from 'devextreme-angular';
import query from 'devextreme/data/query';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  title = 'Materiale MEMS';
  popupTitle: string;
  depositionResults: Deposition[];
  isPopupVisible: boolean;
  filteredData: any;
  totalCount: number;
  expanded = true;

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  constructor(depositionService: DepositionService) {
    this.depositionResults = depositionService.getResults();
    this.totalCount = this.getGroupCount('CustomerStoreState');
  }

  ngOnInit() {
  }

  clearFilters() {
    this.dataGrid.instance.clearFilter('row');
    this.dataGrid.instance.clearFilter('header');
  }

  drawChart() {
    this.filteredData = this.dataGrid.instance.getVisibleRows().map(row => row.data);
    this.isPopupVisible = true;
  }

  onShown() {
    this.popupTitle = 'Rugozitatea medie';
  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift({
      location: 'before',
      template: 'totalGroupCount'
    }, {
      location: 'before',
      widget: 'dxSelectBox',
      options: {
        width: 200,
        items: [{
          value: 'CustomerStoreState',
          text: 'Grouping by State'
        }, {
          value: 'Employee',
          text: 'Grouping by Employee'
        }],
        displayExpr: 'text',
        valueExpr: 'value',
        value: 'CustomerStoreState',
        onValueChanged: this.groupChanged.bind(this)
      }
    }, {
      location: 'before',
      widget: 'dxButton',
      options: {
        width: 136,
        text: 'Collapse All',
        onClick: this.collapseAllClick.bind(this)
      }
    }, {
      location: 'after',
      widget: 'dxButton',
      options: {
        icon: 'refresh',
        onClick: this.refreshDataGrid.bind(this)
      }
    });
  }

  groupChanged(e) {
    this.dataGrid.instance.clearGrouping();
    this.dataGrid.instance.columnOption(e.value, 'groupIndex', 0);
    this.totalCount = this.getGroupCount(e.value);
  }

  collapseAllClick(e) {
    this.expanded = !this.expanded;
    e.component.option({
      text: this.expanded ? 'Collapse All' : 'Expand All'
    });
  }

  refreshDataGrid() {
    this.dataGrid.instance.refresh();
  }

  getGroupCount(groupField) {
    return query(this.depositionResults)
      .groupBy(groupField)
      .toArray().length;
  }
}
