import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrabajadoresListComponent } from './components/trabajadores/trabajadores-list/trabajadores-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddTrabajadorComponent } from './components/trabajadores/add-trabajador/add-trabajador.component';
import { FormsModule } from '@angular/forms';
import { EditTrabajadorComponent } from './components/trabajadores/edit-trabajador/edit-trabajador.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TrabajadoresListComponent,
    AddTrabajadorComponent,
    EditTrabajadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
