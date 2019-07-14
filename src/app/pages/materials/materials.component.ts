import { Component, OnInit, ViewChild } from '@angular/core';
import { Deposition, DepositionService } from '../../shared/services/deposition.service';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {

  title = 'Experimental Results - Direct Current Sputtering ';
  depositionResults: Deposition[];
  chartFilter = {
    xAxisTypes: [],
    yAxisTypes: []
  };

  isPopupVisible: boolean;
  filteredData: any;
  xAxisCurrentFilter: any;
  yAxisCurrentFilter: any;
  isSplineChart = false;
  chartType = 'bar';
  valueAxisTitle: any;
  argumentAxisTitle: any;
  chartTypeText = 'Spline';

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  constructor(depositionService: DepositionService) {
    const filterTypes = [
      {
        key: 'label',
        name: 'Denumire proba'
      },
      {
        key: 'nitrogenFlow',
        name: 'Debit de azot'
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
        name: 'Forta de adeziune'
      }, {
        key: 'intermediateLayer',
        name: 'Strat intermediar'
      }
    ];

    this.depositionResults = depositionService.getResults();

    this.chartFilter = {
      xAxisTypes: filterTypes,
      yAxisTypes: filterTypes
    };

    this.xAxisCurrentFilter = this.chartFilter.xAxisTypes[0].key;
    this.argumentAxisTitle = this.chartFilter.yAxisTypes[0].name;

    this.yAxisCurrentFilter = this.chartFilter.xAxisTypes[6].key;
    this.valueAxisTitle = this.chartFilter.yAxisTypes[6].name;
  }

  ngOnInit() {
  }

  addRow() {
    this.dataGrid.instance.addRow();
  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift( {
        location: 'before',
        widget: 'dxButton',
        options: {
          type: 'Normal',
          text: 'Add',
          icon: 'add',
          onClick: this.addRow.bind(this)
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
    console.log(e.toolbarOptions.items);
    // Remove add row button from the toolbar
    e.toolbarOptions.items.forEach((item, index, object) => {
      if (item.name === 'addRowButton') {
        object.splice(index, 1);
      }

      if (item.name === 'exportButton') {
        item.location = 'before';
      }
    });
  }

  drawChart() {
    this.filteredData = this.dataGrid.instance.getVisibleRows().map(row => row.data);
    this.isPopupVisible = true;
  }

  refreshDataGrid() {
    this.dataGrid.instance.refresh();
    this.dataGrid.instance.clearFilter('row');
    this.dataGrid.instance.clearFilter('header');
  }

  toggleChartType($event) {
    console.log('clicked', $event.value);
    this.chartType =  !this.isSplineChart ? 'bar' : 'spline';
    this.chartTypeText =  !this.isSplineChart ? 'Spline' : 'Bars';
  }

  onXAxisFilterChange($event: any) {
    this.argumentAxisTitle = this.chartFilter.xAxisTypes.filter(
      f => f.key.includes($event)).map(o => this.addMeasureUnit(o));
  }

  onYAxisFilterChange($event: any) {
    this.valueAxisTitle = this.chartFilter.yAxisTypes.filter(
      f => f.key.includes($event)).map(o => this.addMeasureUnit(o));
  }

  addMeasureUnit(parameter) {
    if (parameter.name.includes('azot')) {
      return `${parameter.name} [cm&#179;/min]`;
    }

    if (parameter.name.includes('Temperatura')) {
      return `${parameter.name}  [&#8304;C]`;
    }

    if (parameter.name.includes('adeziune')) {
      return `${parameter.name}  [nN]`;
    }

    if (parameter.name.includes('Rugozitatea')) {
      return `${parameter.name}  [nm]`;
    }

    if (parameter.name.includes('Rugozitatea')) {
      return `${parameter.name}  [nm]`;
    }

    if (parameter.name.includes('Presiunea')) {
      return `${parameter.name} [mTorr]`;
    }

    if (parameter.name.includes('Timp')) {
      return `${parameter.name}   [min]`;
    }
    return parameter.name;
  }
}

