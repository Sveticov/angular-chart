import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {View1Component} from "./view/view1.component";
import {View2Component} from "./view/view2.component";
import {View3Component} from './view/view3.component';



const routes: Routes = [
  {path: '', redirectTo: '/view1', pathMatch: 'full'},
  {path: 'view1', component: View1Component},
  {path: 'view2', component: View2Component},
  {path: 'view3', component: View3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModul {

}
