import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RequestService } from './request.service';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'singleRequest/:id', component: RequestComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}