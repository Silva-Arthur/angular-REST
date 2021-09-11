import { UserChart } from './../../model/UserChart';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit{

  constructor(private usuarioService : UsuarioService ) {}

  userChart = new UserChart();

  ngOnInit(): void {
    this.usuarioService.carregarGrafico().subscribe( data => {
      this.userChart = data;

      /*Nomes*/
      this.barChartLabels = this.userChart.nome.split(',');

      /*Salários*/
      var arraySalario = JSON.parse('[' + this.userChart.salario + ']');
      this.barChartData = [{ data: arraySalario, label: 'Salário do Usuário' }];

    });
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Salário do Usuário' }
  ];

  /**
   *
   * select array_agg(''''||nome||'''') from usuario where salario > 0
     union all
     select array_agg(salario)::character varying[] from usuario where salario > 0;
   *
  */
}
