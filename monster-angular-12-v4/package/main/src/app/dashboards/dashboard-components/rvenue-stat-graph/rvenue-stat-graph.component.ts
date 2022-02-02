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

export type RevenueStatChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: any;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: any;
  grid: ApexGrid;
  fill: ApexFill;
};

@Component({
  selector: 'app-rvenue-stat-graph',
  templateUrl: './rvenue-stat-graph.component.html',
  styleUrls: ['./rvenue-stat-graph.component.css']
})
export class RvenueStatGraphComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public RevenueStatChartOptions: Partial<RevenueStatChartOptions>;

  constructor() {

    this.RevenueStatChartOptions = {
      series: [
          {
              name: 'Product A',
              data: [0, 2, 3, 0, 13, 1, 4, 1]
          },
          {
              name: 'Product B',
              data: [0, 4, 0, 4, 0, 4, 0, 4]
          }
      ],
      chart: {
          fontFamily: 'Nunito Sans,sans-serif',
          height: 370,
          type: 'area',
          toolbar: {
              show: false
          }
      },
      dataLabels: {
          enabled: false
      },
      markers: {
          size: 3,
          strokeColors: "transparent"
      },
      stroke: {
          curve: 'smooth',
          width: '1',
      },
      colors: ['#009efb', '#55ce63'],
      legend: {
          show: false,
      },
      grid: {
          show: true,
          strokeDashArray: 3,
          borderColor: 'rgba(0,0,0,0.1)',
          xaxis: {
              lines: {
                  show: true
              }
          },
          yaxis: {
              lines: {
                  show: true
              }
          }
      },
      fill: {
          type: 'gradient',
          gradient: {
              shade: 'light',
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 0.5,
              opacityTo: 0.3,
              stops: [0, 50, 100]
          },
      },
      xaxis: {
          type: 'category',
          categories: [
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep'
          ],
          labels: {
              style: {
                  colors: '#a1aab2'
              }
          }
      },
      yaxis: {
          labels: {
              style: {
                  colors: '#a1aab2'
              }
          }
      },
      tooltip: {
          theme: 'dark'
      }
  };

   }

  ngOnInit(): void {
  }

}
