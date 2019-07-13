import { Component, OnInit, ViewChild } from '@angular/core';
import { Deposition, DepositionService } from '../../shared/services/deposition.service';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {

  title = 'Rezultate Pulverizare Catodică - Magnetron';
  depositionResults: Deposition[];
  isPopupVisible: boolean;
  filteredData: any;
  xAxisFilterTypes: any;
  yAxisFilterTypes: any;
  xAxisCurrentFilter: any;
  yAxisCurrentFilter: any;


  isSplineChart = false;
  chartType = 'bar';
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  constructor(depositionService: DepositionService) {
    const filterTypes = [
      {
        key: 'nitrogenFlow',
        name: 'Debit de Azot'
      }, {
        key: 'pressure',
        name: 'Presiunea'
      }, {
        key: 'time',
        name: 'Timp'
      }, {
        key: 'temperature',
        name: 'Temperatura'
      }, {
        key: 'roughness',
        name: 'Rugozitatea'
      }, {
        key: 'adhesion',
        name: 'Forta de Adeziune'
      }, {
        key: 'intermediateLayer',
        name: 'Strat Intermediar'
      }
    ];

    this.depositionResults = depositionService.getResults();

    this.xAxisFilterTypes = filterTypes;
    this.xAxisCurrentFilter = this.xAxisFilterTypes[0].key;

    this.yAxisFilterTypes = filterTypes;
    this.yAxisCurrentFilter = this.yAxisFilterTypes[0].key;
  }

  ngOnInit() {
  }



  drawChart() {
    this.filteredData = this.dataGrid.instance.getVisibleRows().map(row => row.data);
    this.isPopupVisible = true;
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
      location: 'before',
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

  toggleChartType($event) {
    console.log('clicked', $event.value);
    this.chartType =  !this.isSplineChart ? 'bar' : 'spline';
  }
}
