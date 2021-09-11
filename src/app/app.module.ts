import { UsuarioReportComponent } from './componentes/usuario/usuario-report/usuario-report.component';
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
import { NgxPaginationModule } from 'ngx-pagination';
import { BrMaskerModule } from 'br-mask';
import { NgxMaskModule } from 'ngx-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxCurrencyModule } from 'ngx-currency';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './componentes/bar-chart/bar-chart.component';

export const appRouters: Routes = [
{path: 'home', component: HomeComponent, canActivate: [GuardiaoGuard]},
{path: 'login', component: LoginComponent},
{path: '', component: LoginComponent},
{path: 'usuarioList', component: UsuarioComponent, canActivate: [GuardiaoGuard]},
{path: 'usuarioAdd', component: UsuarioAddComponent, canActivate: [GuardiaoGuard]},
{path: 'usuarioAdd/:id', component: UsuarioAddComponent, canActivate: [GuardiaoGuard]},
{path: 'userReport', component: UsuarioReportComponent, canActivate: [GuardiaoGuard]},
{path: 'chart', component: BarChartComponent, canActivate: [GuardiaoGuard]}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioAddComponent,
    UsuarioReportComponent,
    BarChartComponent
  ],
    imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule,
    NgxMaskModule.forRoot({dropSpecialCharacters: true}),
    NgxPaginationModule,
    BrMaskerModule,
    NgbModule,
    NgxCurrencyModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
