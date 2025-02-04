import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { Chart, ChartItem, Point } from 'chart.js/auto';
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideMenuComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
