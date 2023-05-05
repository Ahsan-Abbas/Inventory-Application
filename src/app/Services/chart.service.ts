import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChartData } from '../Models/ChartData';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor() {}

  public chartData: ChartData[] = [
    {
      name: 'Laptop',
      series: [44, 55, 41],
      labels: ['A', 'B', 'C'],
    },
    {
      name: 'Desktop Computer',
      series: [22, 33, 25],
      labels: ['F', 'G', 'H'],
    },
    {
      name: 'Led',
      series: [11, 22, 18],
      labels: ['K', 'L', 'M'],
    },
    {
      name: 'Ups',
      series: [18, 8, 7],
      labels: ['N', 'O', 'P'],
    },
    {
      name: 'Multimedia',
      series: [22, 18, 7],
      labels: ['Q', 'R', 'S'],
    },
    {
      name: 'Scanner',
      series: [11, 8, 7],
      labels: ['T', 'U', 'V'],
    },
    {
      name: 'Color Printer',
      series: [11, 18, 8],
      labels: ['W', 'X', 'Y'],
    },
    {
      name: 'Black & White Printer',
      series: [1, 5, 10],
      labels: ['Z', 'AB', 'AC'],
    },
  ];

  getChartData(): Observable<ChartData[]> {
    return of(this.chartData);
  }
}
