import { ModalInternoPage } from './../modal-interno/modal-interno.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  async exibeModal(){
    let modal = await this.modalCtrl.create({
      component : ModalInternoPage, 
      componentProps : {nome: 'Alex', idade: 27}
    }); 

    modal.onDidDismiss().then((responseModal: any) => {
      //if(responseModal !== null){
      //  console.log(responseModal.data.nome); 
      //  console.log(responseModal)
      // }
      console.log(responseModal); 
    });
    return await modal.present(); 
  }

}
