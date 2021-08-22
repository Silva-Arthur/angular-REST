import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {

  }

  getUsuarioList(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);
  }

  getUsuarioListPage(pagina): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + 'page/' + pagina);
  }

  deletarUsuario(id: Number): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + id, { responseType: 'text' });
  }

  consultarUser(nome: String): Observable<any> {
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome);
  }

  consultarUserPage(nome: String, page: Number): Observable<any> {
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome + "/page/" + page);
  }

  getUsuario(id): Observable<any> {
    return this.http.get(AppConstants.baseUrl + id);
  }

  salvarUsuario(usuario): Observable<any> {
    return this.http.post<any>(AppConstants.baseUrl, usuario);
  }

  updateUsuario(usuario): Observable<any> {
    return this.http.put<any>(AppConstants.baseUrl, usuario);
  }

  removerTelefone(id: Number): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + "removerTelefone/" + id, {responseType: 'text'});
  }

  userAutenticado() {
    if (localStorage.getItem('token') !== null &&
      localStorage.getItem('token').toString().trim() != null) {
        return true;
    }
    return false;
  }

  getProfissaoList() : Observable<any> {
    return this.http.get<any>(AppConstants.getBaseUrlPath + 'profissao/');
  }
}
