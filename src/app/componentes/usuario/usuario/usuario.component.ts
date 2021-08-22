import { Profissao } from './../../../model/profissao';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Array<Usuario[]>;
  nome: String;
  p: Number;
  total: Number;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.carregarUsuarioList();
  }

  carregarUsuarioList() {
    this.usuarioService.getUsuarioList().subscribe(data => {
      this.usuarios = data.content;
      this.total = data.totalElements;
    });
  }


  deleteUsuario(id: Number, index) {

    if (confirm('Deseja mesmo remover ?')) {
      this.usuarioService.deletarUsuario(id).subscribe(data => {
        this.usuarios.splice(index, 1); /*remover da tela*/
      });

    }

  }

  consultarUser() {

    if (this.nome === '') {
      this.carregarUsuarioList();
    } else {
      this.usuarioService.consultarUser(this.nome).subscribe(data => {
        this.usuarios = data.content;
        this.total = data.totalElements;
      });
    }

  }

  carregarPagina(pagina) {
    console.info("Pagina -> " + pagina);

    if (this.nome !== '') {
      this.usuarioService.consultarUserPage(this.nome, (pagina - 1)).subscribe(data => {
        this.usuarios = data.content;
        this.total = data.totalElements;
      });
    } else {
      this.usuarioService.getUsuarioListPage(pagina - 1).subscribe(data => {
        this.usuarios = data.content;
        this.total = data.totalElements;
      });
    }

  }

}
