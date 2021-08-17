import { Telefone } from "./telefone";

export class Usuario {
	id: Number;
	login: String;
	cpf: String;
	nome: String;
	senha: String;
  telefones: Array<Telefone>;
  dataNascimento: String;
}
