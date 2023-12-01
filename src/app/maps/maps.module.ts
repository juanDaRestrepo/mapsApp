import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl'; 
(mapboxgl as any).accessToken = 'pk.eyJ1IjoianVhbnJlc3RyZXBvd2ViZGV2IiwiYSI6ImNscG13ajJ1NjAwazEya29peTdreDZ0dmgifQ._2SBgMFVFjybgeeItJ-_SA';

import { FullScreenPageComponent } from './maps/pages/full-screen-page/full-screen-page.component';
import { MapsLayoutComponent } from './maps/layout/maps-layout/maps-layout.component';
import { MapsRoutingModule } from './maps-routing.module';
import { MarkersPageComponent } from './maps/pages/markers-page/markers-page.component';
import { MiniMapComponent } from './maps/components/mini-map/mini-map.component';
import { PropertiesPageComponent } from './maps/pages/properties-page/properties-page.component';
import { SidemenuComponent } from './maps/components/sidemenu/sidemenu.component';
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
