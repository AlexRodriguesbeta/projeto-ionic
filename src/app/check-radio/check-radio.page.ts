import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-radio',
  templateUrl: './check-radio.page.html',
  styleUrls: ['./check-radio.page.scss'],
})
export class CheckRadioPage implements OnInit {

  meses : any[]= [
    {nomeMes: 'JAN', valor:1, marcado: false},
    {nomeMes: 'FEV', valor:2, marcado: true},
    {nomeMes: 'MAR', valor:3, marcado: true},
    {nomeMes: 'ABR', valor:4, marcado: true},
    {nomeMes: 'MAI', valor:5, marcado: false},
    {nomeMes: 'JUN', valor:6, marcado: false}

  ]
  constructor() { }

  ngOnInit() {
    console.log(this.meses); 
  }

  exibirMeses(){
    console.table(this.meses);
  }

}
