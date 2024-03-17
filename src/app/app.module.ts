import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    ProtheusLibCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
