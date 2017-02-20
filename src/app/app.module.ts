import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PointListComponent } from './point-list/point-list.component';
import { PointDetailComponent } from './point-detail/point-detail.component';
import { routing } from "./app.routing";
import { PointService } from "./shared/point.service";
import { AgmCoreModule } from "../../node_modules/angular2-google-maps/core/core-module";
import { Title } from "../../node_modules/@angular/platform-browser/src/browser/title";
import { TitleService } from "./shared/title.service";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PointListComponent,
    PointDetailComponent
  ],
  imports: [
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAGb1MTX-euG06undWOO9WrTujXSd9SJMI'
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [Title, PointService, TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
