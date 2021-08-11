import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders} from '@angular/compiler/src/core';

import { LoginComponent } from './login/login.component';
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { UsuarioComponent } from './componentes/usuario/usuario/usuario.component';
import { UsuarioAddComponent } from './componentes/usuario/usuario-add/usuario-add.component';
import { GuardiaoGuard } from './service/guardiao.guard';
//import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';

export const appRouters: Routes = [
{path: 'home', component: HomeComponent, canActivate: [GuardiaoGuard]},
{path: 'login', component: LoginComponent},
{path: '', component: LoginComponent},
{path: 'usuarioList', component: UsuarioComponent, canActivate: [GuardiaoGuard]},
{path: 'usuarioAdd', component: UsuarioAddComponent, canActivate: [GuardiaoGuard]},
{path: 'usuarioAdd/:id', component: UsuarioAddComponent, canActivate: [GuardiaoGuard]}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRouters);

//export const optionsMask: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioAddComponent
  ],
    imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule,
    //NgxMaskModule.forRoot(optionsMask),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
