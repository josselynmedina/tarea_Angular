import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { PeliculasService } from './peliculas.service';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularFormComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
