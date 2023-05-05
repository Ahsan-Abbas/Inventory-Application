import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MapComponent } from './Components/map/map.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsComponent } from './Components/charts/charts.component';

@NgModule({
  declarations: [AppComponent, MapComponent, ChartsComponent],
  imports: [BrowserModule, AppRoutingModule, NgApexchartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
