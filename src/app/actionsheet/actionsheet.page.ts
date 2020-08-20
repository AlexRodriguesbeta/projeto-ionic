import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.page.html',
  styleUrls: ['./actionsheet.page.scss'],
})
export class ActionsheetPage implements OnInit {

  constructor(private actionSheetCtrl : ActionSheetController) { }

  ngOnInit() {
  }

  async abrirActionSheet(){
    let actionSheet = await this.actionSheetCtrl.create({
      header : 'Ação requerida!', 
      buttons: [
        {
          text : 'Excluir',
          icon : 'trash', 
          handler : ()=>{
            alert('Excluir'); 
            //console.log('Excluir'); 
          }
        },

        {
          text : 'Compartilhar',
          icon : 'share', 
          handler : ()=>{
            console.log('Compartilhar'); 
          }
        },

        {
          text : 'Assistir',
          icon : 'arrow-dropright-circle', 
          handler : ()=>{
            console.log('Assitir'); 
          }
        },

        {
          text : 'Cancelar',
          icon : 'close', 
          handler : ()=>{
            console.log('Cancelando'); 
          }
        }

      ]

    });

    await actionSheet.present(); 
  }

}
