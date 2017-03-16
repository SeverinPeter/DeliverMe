import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RequestService } from './request.service';
import { RequestComponent } from './request/request.component';

//import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'singleRequest/:id', component: RequestComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //AppRoutingModule
    RouterModule.forRoot(routes)
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})

export class AppModule { }
