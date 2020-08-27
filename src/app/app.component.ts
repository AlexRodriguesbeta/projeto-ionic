import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

   paginas : any[]  = [ 
    {titulo: 'Home', endereco: '/home', icone: 'home'},
    {titulo: 'Header/Footer', endereco: '/list', icone: 'list'},
    {titulo: 'Página2', endereco: '/pagina2', icone: 'albums'},
    {titulo: 'GRIDS', endereco: '/grids', icone: 'list'},
    {titulo: 'TABS',  endereco: '/tabs', icone: 'alert'}, 
    {titulo: 'ActionSheet',  endereco: '/actionsheet', icone: 'albums'},
    {titulo: 'Ex. Alerts',  endereco: '/alert', icone: 'albums'},
    {titulo: 'Buttons',  endereco: '/buttons', icone: 'alert'}
  ]; 
  
  //public appPages = [
   // {
    //  title: 'Home',
   //   url: '/home',
  //    icon: 'home'
   // },
  //  {
  //    title: 'List',
  //    url: '/list',
  //    icon: 'list'
   // },
   // {
   //   title: 'Página 2',
   //   url: '/pagina2',
  //    icon: 'albums'
   // }
 // ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
