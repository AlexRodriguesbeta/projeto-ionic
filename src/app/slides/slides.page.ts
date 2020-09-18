import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  comecar(){
    this.navCtrl.navigateForward('home'); 
  }

}
