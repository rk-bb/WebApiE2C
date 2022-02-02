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

export interface SalespredictionChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
}


@Component({
  selector: 'app-sales-prediction',
  templateUrl: './sales-prediction.component.html',
  styleUrls: ['./sales-prediction.component.css']
})
export class SalesPredictionComponent implements OnInit {

  @ViewChild('chart') chart3: ChartComponent = Object.create(null);
  public SalespredictionChartOptions: Partial<SalespredictionChartOptions>;


  constructor() {

    this.SalespredictionChartOptions = {
      series: [76],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        type: "radialBar",
        width: 170,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: false,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 20,
              fontSize: "14px",
              color: '#39c449',
            }
          }
        }
      },
      fill: {
        colors: ['#39c449']
      },
    };
  }

  ngOnInit(): void {
  }

}
