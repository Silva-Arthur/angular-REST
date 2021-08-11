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

  usuarios: Observable<Usuario[]>;
  nome: String;
  p: Number;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.carregarUsuarioList();
  }

  carregarUsuarioList() {
    this.usuarioService.getUsuarioList().subscribe(data => {
      this.usuarios = data;
    });
  }

  deleteUsuario(id: Number) {

    if (confirm('Deseja mesmo remover ?')) {
      this.usuarioService.deletarUsuario(id).subscribe(data => {
        console.log("Retorno do metodo delete: " + data);
        this.carregarUsuarioList();
      });
    }

  }

  consultarUser() {
    this.usuarioService.consultarUser(this.nome).subscribe(data => {
      this.usuarios = data;
    });
  }
}
