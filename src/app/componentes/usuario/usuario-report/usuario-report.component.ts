import { UserReport } from './../../../model/UserReport';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/service/usuario.service';

@Injectable()
export class FormatDateAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '/';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel (date : NgbDateStruct | null) : string | null {
    return date ? this.validarZero(date.day) + this.DELIMITER + this.validarZero(date.month) + this.DELIMITER + date.year : null;
  }

  validarZero(valor) : string {
    console.log(valor);
    if (valor.toString !== '' && parseInt(valor) <= 9) {
      return '0' + valor;
    }
    return valor;
  }

}

@Injectable()
export class FormataData extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct ): string | null{
    return date ? this.validarZero(date.day) + this.DELIMITER + this.validarZero(date.month) + this.DELIMITER + date.year : '';
  }

  toModel (date : NgbDateStruct | null) : string | null {
    return date ? this.validarZero(date.day) + this.DELIMITER + this.validarZero(date.month) + this.DELIMITER + date.year : null;
  }

  validarZero(valor) : string {
    console.log(valor);
    if (valor.toString !== '' && parseInt(valor) <= 9) {
      return '0' + valor;
    }
    return valor;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './usuario-report.component.html',
  styleUrls: ['./usuario-report.component.css'],
  providers: [{provide: NgbDateParserFormatter, useClass: FormataData},
              {provide: NgbDateAdapter, useClass: FormatDateAdapter}]
})
export class UsuarioReportComponent {

  userReport = new UserReport();

  constructor(private routeActive: ActivatedRoute, private userService: UsuarioService) { }

  imprimeRelatorio() {
    console.log(this.userReport);
    return this.userService.downloadPdfRelatorioParametro(this.userReport);
  }

  limpaIframe() {
    document.querySelector('iframe').src = '';
  }

}
