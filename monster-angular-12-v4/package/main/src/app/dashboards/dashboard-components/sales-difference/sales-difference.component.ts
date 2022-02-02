import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid,
  ApexFill,
  ApexStroke,
  ApexNonAxisChartSeries,
  ApexPlotOptions
} from 'ng-apexcharts';


export interface SalesdifferenceChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  legends: ApexLegend;
  labels: any;
  name: any;
  tooltip: ApexTooltip;
  colors: string[];
  plotOptions: ApexPlotOptions
}

@Component({
  selector: 'app-sales-difference',
  templateUrl: './sales-difference.component.html',
  styleUrls: ['./sales-difference.component.css']
})
export class SalesDifferenceComponent implements OnInit {

  @ViewChild('chart') chart4: ChartComponent = Object.create(null);
  public SalesdifferenceChartOptions: Partial<SalesdifferenceChartOptions>;

  constructor() {

    this.SalesdifferenceChartOptions = {
      series: [35, 15, 10],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        type: 'donut',
        height: 118
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '60px',
            labels: {
              show: false,
            }
          }
        }
      },
      tooltip: {
        theme: "dark",
        fillSeriesColor: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0
      },
      legends: {
        show: false,
      },
      labels: ['Item A', 'Item B', 'Item C'],
      colors: ['#39c449', '#ebf3f5', '#009efb'],
    };
  }

  ngOnInit(): void {
  }

}
