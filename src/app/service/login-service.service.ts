import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario) {
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {
      /*Retorno HTTP*/

      // Pegando s� o token
      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

      localStorage.setItem("token", token);

      // console.info("token: " + localStorage.getItem("token"));

      this.router.navigate(['home']);

    },
      error => {
        console.error("Erro ao fazer login");
        alert('Acesso negado!');
      }
    );
  }

  recuperar(login) {

    let user = new Usuario();

    user.login = login;

    return this.http.post(AppConstants.getBaseUrlPath + 'recuperar/', user).subscribe(data => {
      /*Retorno HTTP*/
      alert(JSON.parse(JSON.stringify(data)).error);
    },
      error => {
        console.error("Erro ao recuperar login!");
        alert('Erro ao recuperar login!');
      }
    );
  }

}
