import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './Components/map/map.component';
import { ChartComponent } from 'ng-apexcharts';

const routes: Routes = [
  { path: 'charts', component: ChartComponent },
  { path: 'map', component: MapComponent },
  { path: '', redirectTo: '/charts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
