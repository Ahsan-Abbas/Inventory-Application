import {
  Component,
  OnInit,
  ElementRef,
  AfterViewInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ChartService } from 'src/app/Services/chart.service';
import { ChartData } from 'src/app/Models/ChartData';
import { ApexOptions } from 'ng-apexcharts';
import ApexCharts from 'apexcharts';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit, AfterViewInit {
  @ViewChildren('chartRef') chartRefs!: QueryList<ElementRef>;

  chartData!: ChartData[];
  chartOptions!: ApexOptions;

  constructor(private chartService: ChartService, private router: Router) {}

  ngOnInit(): void {
    //* Getting the data from Chart Service File
    this.chartService.getChartData().subscribe((data) => {
      this.chartData = data;
    });
  }

  ngAfterViewInit(): void {
    //* Draw chart after rendering of main paged
    this.chartRefs.forEach((chartRef, index) => {
      const chartId = `chart-${index}`;
      const chartElement = chartRef.nativeElement;
      chartElement.setAttribute('id', chartId);
      this.drawChart(chartId, this.chartData[index]);
    });
  }

  //* Initialization of the charts
  drawChart(chartId: string, chart: ChartData) {
    const options: ApexOptions = {
      chart: {
        type: 'donut',
        width: 300,
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10,
        },
      },
      grid: {
        padding: {
          bottom: -80,
        },
      },
      legend: {
        fontSize: '13',
        //fontWeight: 'bold',
        position: 'bottom',
        horizontalAlign: 'center',
        offsetY: -40,
        showForSingleSeries: true,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
      series: chart.series,
      labels: chart.labels,
    };

    this.chartOptions = options;

    new ApexCharts(
      document.getElementById(chartId),
      this.chartOptions
    ).render();
  }

  goToMap() {
    this.router.navigate(['/map']);
  }
}
