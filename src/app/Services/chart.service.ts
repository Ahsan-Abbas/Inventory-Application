import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChartData } from '../Models/ChartData';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor() {}

  //* Loading charts data from object
  public chartData: ChartData[] = [
    {
      name: 'Laptop',
      series: [44, 55, 41],
      labels: ['Allocated', 'BER', 'Not Allocated'],
    },
    {
      name: 'Desktop Computer',
      series: [22, 33, 25],
      labels: ['Allocated', 'BER', 'Not Allocated'],
    },
    {
      name: 'Led',
      series: [11, 22, 18],
      labels: ['Allocated', 'BER', 'Not Allocated'],
    },
    {
      name: 'Ups',
      series: [18, 8, 7],
      labels: ['Allocated', 'BER', 'Not Allocated'],
    },
    {
      name: 'Multimedia',
      series: [22, 18, 7],
      labels: ['Allocated', 'BER', 'Not Allocated'],
    },
    {
      name: 'Scanner',
      series: [11, 8, 7],
      labels: ['Allocated', 'BER', 'Not Allocated'],
    },
    {
      name: 'Color Printer',
      series: [11, 18, 8],
      labels: ['Allocated', 'BER', 'Not Allocated'],
    },
    {
      name: 'Black & White Printer',
      series: [1, 5, 10],
      labels: ['Allocated', 'BER', 'Not Allocated'],
    },
  ];

  getChartData(): Observable<ChartData[]> {
    return of(this.chartData);
  }
}
