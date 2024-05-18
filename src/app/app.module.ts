// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Ensure this import is correct

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    HeaderComponent // Make sure AppHeaderComponent is declared here
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule ,// Ensure AppRoutingModule is imported here
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }