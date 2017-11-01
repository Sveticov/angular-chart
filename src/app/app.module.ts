import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyChartLineComponent} from './my-chart-line/my-chart-line.component';
import {HttpModule} from '@angular/http';
import {Ng2GoogleChartModule} from 'ng2-googlechart';
import {FormsModule} from '@angular/forms';
import {View1Component} from "./view/view1.component";
import {View2Component} from "./view/view2.component";
import {AppRoutingModul} from "./app.routing.modul";
import {View3Component} from "./view/view3.component";

@NgModule({
  declarations: [
    AppComponent,
    MyChartLineComponent,
    View1Component,
    View2Component,
    View3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2GoogleChartModule,
    AppRoutingModul
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
