import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  constructor() { }

  mensagem : string = 'Deslize para baixo para atualizar as informações...'
  
  ngOnInit() {
  }

  atualizarMensagem(event : any){
    setTimeout(()=>{
      this.mensagem = 'Conteúdo atualizado com sucesso!'; 
      event.target.complete(); 
    },2000); 
  }

}
