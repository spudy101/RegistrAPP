import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {

  constructor(private menu: MenuController) {
  }


  ngOnInit() {
  }

  openMenu(){
    this.menu.toggle("second")
  }

}
