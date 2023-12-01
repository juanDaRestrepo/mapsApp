import { Component, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; 

(mapboxgl as any).accessToken = 'pk.eyJ1IjoianVhbnJlc3RyZXBvd2ViZGV2IiwiYSI6ImNscG13ajJ1NjAwazEya29peTdreDZ0dmgifQ._2SBgMFVFjybgeeItJ-_SA';



@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit {

  

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
