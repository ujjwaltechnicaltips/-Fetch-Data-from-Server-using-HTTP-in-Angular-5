import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import {BiodataService} from './biodata.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [BiodataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
