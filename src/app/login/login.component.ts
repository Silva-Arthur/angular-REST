import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  title = 'curso-angular-REST';

  usuario = {login: '', senha : ''};
  
  constructor(private loginService: LoginServiceService){}

  public login(){
    this.loginService.login(this.usuario);
  }


}
