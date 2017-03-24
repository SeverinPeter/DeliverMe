import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RequestService } from './request.service';
import { RequestComponent } from './request/request.component';
import { NewRequestComponent } from './new-request/new-request.component';

//import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'singleRequest/:id', component: RequestComponent },
  { path: 'newRequest', component: NewRequestComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RequestComponent,
    NewRequestComponent
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
