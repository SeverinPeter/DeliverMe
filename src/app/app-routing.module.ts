import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RequestService } from './_services/request.service';
import { RequestComponent } from './request/request.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewRequestComponent } from './new-request/new-request.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'singleRequest/:id', component: RequestComponent },
    { path: 'newRequest', component: NewRequestComponent},
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);