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



export interface bandwidthChartOptions {
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
  selector: 'app-bandwidth-usage',
  templateUrl: './bandwidth-usage.component.html',
  styleUrls: ['./bandwidth-usage.component.css']
})
export class BandwidthUsageComponent implements OnInit {



  @ViewChild('chart') chart3: ChartComponent = Object.create(null);
  public bandwidthChartOptions: Partial<bandwidthChartOptions>;

  constructor() {

    this.bandwidthChartOptions = {
      series: [300, 500, 100],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        type: 'donut',
        height: 140,
        width: 140,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '50px',
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
        width: 2,
        colors: ["#39c449"],
      },
      legends: {
        show: false,
      },
      labels: ['Sales', 'Cost', 'Earning'],
      colors: ['#1976d2', '#fff', '#2b2b2b'],
    };

  }

  ngOnInit(): void {
  }

}
