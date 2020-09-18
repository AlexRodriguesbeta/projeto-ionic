import { Component, OnInit } from '@angular/core';
import { PRIMARY_OUTLET } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private aguardeCtrl : LoadingController) { }

  ngOnInit() {
  }

  async exibeLoadingPadrao(){
    let loading = await this.aguardeCtrl.create({
      message : "Processando...",
      duration: 2000
    }); 
    return await loading.present(); 
  }

  async exibeLoadingCustomizadoHide(TipoSpinner : String){
    let loading = await this.aguardeCtrl.create({
      //spinner : TipoSpinner,  
      message : "Processando...",
      duration: 2000
    }); 
    return await loading.present();  
  }

  async exibeLoadingAPI(){
    let loading = await this.aguardeCtrl.create({
    message : "Processando...",
  }); 
  //Simulando requisição servidor via API
  setTimeout(() => {
    console.log("Servidor respondeu a requisição..."); 
    loading.dismiss(); 
  }, 5000); 
  console.log("Simulando uma requisição ao servidor"); 
  return await loading.present(); 
  }

}
