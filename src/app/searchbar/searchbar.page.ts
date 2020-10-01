import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  nome : string = '';
  estados : any;
  estadosFiltrados : any;

  constructor() { 
    this.estados = [
      {id: 1, nome: "Acre"},
      {id: 2, nome: "Amapá"},
      {id: 3, nome: "Amazonas"},
      {id: 4, nome: "Bahia"},
      {id: 5, nome: "São Paulo"},
      {id: 6, nome: "Rio Grande do Sul"},
      {id: 7, nome: "Rio Grando do Norte"},
      {id: 8, nome: "Rio de Janeiro"},
      {id: 9, nome: "Alagoas"},
      {id: 10, nome: "Minas Gerais"}
    ];

    this.estadosFiltrados = this.estados; 
  } 

  ngOnInit() {
  }

  filtrarItens(){
    this.estadosFiltrados = this.filtrarEstados(this.nome); 
  }

  filtrarEstados(nome){
    this.estadosFiltrados = this.estados; 
    return this.estadosFiltrados.filter(item => {
      return item.nome.toLowerCase().includes(nome.toLowerCase()); 
    });  
  }
}
