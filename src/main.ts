/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

  bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(HttpClientModule, BrowserAnimationsModule),
      ...appConfig.providers,
    ],
  }).catch((err) => console.error(err));
