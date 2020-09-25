import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { JanelaPopoverComponent } from './../janela-popover/janela-popover.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl : PopoverController) { }

  ngOnInit() {
  }

  async exibePopover(evento: any){
    let popover = await this.popoverCtrl.create({
      component: JanelaPopoverComponent,
      event : evento 
    });
    return await popover.present(); 
  }

}
