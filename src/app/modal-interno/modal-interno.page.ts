import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-interno',
  templateUrl: './modal-interno.page.html',
  styleUrls: ['./modal-interno.page.scss'],
})
export class ModalInternoPage implements OnInit {

  constructor(private navParam: NavParams, private alertCtrl : AlertController, private modalCtrl : ModalController) {}

  async ngOnInit() {
    let nome = (this.navParam.get('nome'));
    let idade = (this.navParam.get('idade'));
    // console.log(nome, idade); 

    let alerta = await this.alertCtrl.create({
      header: 'Bem vindo!',
      message: 'Seja bem vindo, '+ nome + ', você possui ' + idade + ' anos.'
    });

    return await alerta.present(); 

  }

  async fechaModal(){
    let parametroResposta = {nome: 'Alex', idade: 27}; 

    this.modalCtrl.dismiss(parametroResposta); 
  }

}
