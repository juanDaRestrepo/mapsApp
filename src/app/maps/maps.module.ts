import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './maps/components/mini-map/mini-map.component';
import { SidemenuComponent } from './maps/components/sidemenu/sidemenu.component';
import { MapsLayoutComponent } from './maps/layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './maps/pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './maps/pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './maps/pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './maps/pages/zoom-range-page/zoom-range-page.component';


@NgModule({
  declarations: [
    MiniMapComponent,
    SidemenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
