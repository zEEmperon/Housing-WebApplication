import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PropertyCardComponent } from './core/property/property-card/property-card.component';
import { PropertyListComponent } from './core/property/property-list/property-list.component';
import { HousingService } from "./services/housing.service";
import { MaterialModule } from "./material/material.module";
import { AddPropertyComponent } from './core/property/add-property/add-property.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {PropertyDetailComponent} from "./core/property/property-detail/property-detail.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './core/user/login/login.component';
import { SignupComponent } from './core/user/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    AddPropertyComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
