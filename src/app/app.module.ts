import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { DatatableComponent } from './datatable/datatable.component';
import { HeaderComponent } from './header/header.component';
import { DataEditComponent } from './data-edit/data-edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    DatatableComponent,
    HeaderComponent,
    DataEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
