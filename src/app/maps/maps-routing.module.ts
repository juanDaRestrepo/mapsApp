import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapsLayoutComponent } from './maps/layout/maps-layout/maps-layout.component';

import { FullScreenPageComponent } from './maps/pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './maps/pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './maps/pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './maps/pages/zoom-range-page/zoom-range-page.component';

const routes: Routes = [
  {
    path: '',
    component: MapsLayoutComponent,
    children: [
      { path: 'fullscreen', component: FullScreenPageComponent},
      { path: 'zoom-range', component: ZoomRangePageComponent},
      { path: 'markers', component: MarkersPageComponent},
      { path: 'properties', component: PropertiesPageComponent},
      { path: '**', redirectTo: 'fullscreen'},
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
