import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

  habilitado : boolean = true; 

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  abrirTabs(){
      //alert("Teste evendo...");
      this.navCtrl.navigateForward('alert'); 
  }

}
