import { Component, OnInit, ViewChild } from '@angular/core';
import { Deposition, DepositionService } from '../../shared/services/deposition.service';
import { DxDataGridComponent } from 'devextreme-angular';
import { collectAllDependants } from 'ts-loader/dist/types/utils';

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

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  constructor(depositionService: DepositionService) {
    const filterTypes = [
      {
        key: 'label',
        name: 'Nume Proba'
      },
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

    this.chartFilter = {
      xAxisTypes: filterTypes,
      yAxisTypes: filterTypes
    };

    this.xAxisCurrentFilter = this.chartFilter.xAxisTypes[0].key;
    this.yAxisCurrentFilter = this.chartFilter.xAxisTypes[6].key;
  }

  ngOnInit() {
  }

  drawChart($e) {
    this.filteredData = this.dataGrid.instance.getVisibleRows().map(row => row.data);
    console.log('[drawChart clicked] rows =>', this.filteredData);
    console.log('$e', $e);
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

  onXAxisValueChanged($event: any) {
    // this.yAxisTitle = this.xAxisFilterTypes.filter(f => f.key === this.xAxisCurrentFilter);
    this.argumentAxisTitle = $event;
    console.log('onXAxisValueChanged', $event);
  }

  onYAxisValueChanged($event: any) {
    // this.xAxisTitle = this.yAxisFilterTypes.filter(f => f.key === this.yAxisCurrentFilter);
    this.valueAxisTitle = $event;
    console.log('onYAxisValueChanged', $event);
  }
}
