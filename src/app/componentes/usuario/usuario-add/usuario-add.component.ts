import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Telefone } from 'src/app/model/telefone';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  usuario = new Usuario();
  telefone = new Telefone();

  constructor(private routeActive: ActivatedRoute,
    private userService: UsuarioService) { }

  ngOnInit() {
    /*Pegando o parametro id*/
    let id = this.routeActive.snapshot.paramMap.get('id');

    if (id != null) {
      this.userService.getUsuario(id).subscribe(data => {
        this.usuario = data;
      });
    }
  }

  salvarUsario() {
    if (this.usuario.id != null && this.usuario.id.toString().trim != null) {
      /*Atualiando ou editando*/
      this.userService.updateUsuario(this.usuario).subscribe(data => {
        console.info("Atualizou usuario " + data);
        this.novo();
      });
    } else {
      /*Salvando novo usu�rio*/
      this.userService.salvarUsuario(this.usuario).subscribe(data => {
        console.info("Gravou usuario! " + data);
        this.novo();
      });
    }
  }

  deletarTelefone(id, i) {
    if (id == null) {
      this.usuario.telefones.splice(i, 1);
      return;
    }

    if (id != null && confirm("Deseja remover?")) {
      this.userService.removerTelefone(id).subscribe(data => {
        this.usuario.telefones.splice(i, 1); /*remove o telefone da lista*/
        console.info("Telefone removido = " + data);
      });
    }
  }

  addFone() {
    //Caso a lista não estiver instanciada, instancia-se a lista.
    if (this.usuario.telefones === undefined) {
      this.usuario.telefones = new Array<Telefone>();
    }

    this.usuario.telefones.push(this.telefone);
    this.telefone = new Telefone();
  }

  novo (){
    this.usuario = new Usuario();
    this.telefone = new Telefone();
  }

}
