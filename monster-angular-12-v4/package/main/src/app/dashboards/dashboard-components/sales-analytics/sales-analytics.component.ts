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
  ApexNonAxisChartSeries,
  ApexStroke,
  ApexPlotOptions
} from 'ng-apexcharts';


export interface SalesanalyticsChartOptions {
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
  selector: 'app-sales-analytics',
  templateUrl: './sales-analytics.component.html',
  styleUrls: ['./sales-analytics.component.css']
})
export class SalesAnalyticsComponent implements OnInit {

  @ViewChild('chart') chart2: ChartComponent = Object.create(null);
  public SalesanalyticsChartOptions: Partial<SalesanalyticsChartOptions>;

  constructor() {
    this.SalesanalyticsChartOptions = {
      series: [300, 500, 100],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        type: 'pie',
        height: 120
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '85px',
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
        width: 1,
        colors: ["#009efb"],
      },
      legends: {
        show: false,
      },
      labels: ['Sales', 'Cost', 'Earning'],
      colors: ['#ffb22b', '#26dad2', '#fff'],
    };
  }

  ngOnInit(): void {
  }

}
