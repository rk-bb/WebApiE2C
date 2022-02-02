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

export interface SalesmonthChartOptions {
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
  selector: 'app-sales-of-month',
  templateUrl: './sales-of-month.component.html',
  styleUrls: ['./sales-of-month.component.css']
})
export class SalesOfMonthComponent implements OnInit {

  @ViewChild('chart') chart2: ChartComponent = Object.create(null);
  public SalesmonthChartOptions: Partial<SalesmonthChartOptions>;

  constructor() {

    this.SalesmonthChartOptions = {
      series: [9, 3, 2, 2],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        type: 'donut',
        height: 210
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '85px',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '18px',
                color: undefined,
                offsetY: 10
              },
              value: {
                show: false,
                color: '#99abb4',
              },
              total: {
                show: true,
                label: 'sales',
                color: '#99abb4',
              }
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
      labels: ['Item D', 'Item C', 'Item B', 'Item A'],
      colors: ['#edf1f5', '#009efb', '#55ce63', '#745af2'],
    };
  }

  ngOnInit(): void {
  }

}
