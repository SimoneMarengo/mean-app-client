import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MaterialModule } from './material.module';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegistrationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
