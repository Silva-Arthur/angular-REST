import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'; /*Requisições ajax*/
import { RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders} from '@angular/compiler/src/core';

import { LoginComponent } from './login/login.component';
/* Declara as rotas de acesso*/
export const appRouters: Routes = [
{path: 'home', component: HomeComponent},
{path: 'login', component: LoginComponent}
];

/* Lê as rotas de acesso*/
export const routes: ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
      imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes // chama as rotas 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
