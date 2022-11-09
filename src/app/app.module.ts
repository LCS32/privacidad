import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioPrivacidadComponent } from './formulario-privacidad/formulario-privacidad.component';
import { FormularioConfidencialidadComponent } from './formulario-confidencialidad/formulario-confidencialidad.component';
import {ClipboardModule} from '@angular/cdk/clipboard'




@NgModule({
  declarations: [
    AppComponent,
    FormularioPrivacidadComponent,
    FormularioConfidencialidadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
