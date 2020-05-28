import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './componentes/registro/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './componentes/login/login.component';
import { NologinGuard } from './guards/nologin.guard';
import { AuthGuard } from './guards/auth.guard';
import { NavbarComponent } from 'documentacion/argon-design-system-angular-master/src/app/shared/navbar/navbar.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent, canActivate:[AuthGuard] },
    { path: 'perfil',     component: ProfileComponent },
    { path: 'registro',           component: SignupComponent },
    { path: 'navbar',          component: NavbarComponent, canActivate:[AuthGuard] },
    { path: 'login', component: LoginComponent,canActivate:[NologinGuard] ,data: {animation: 'LoginPage'}},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: '**',redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
