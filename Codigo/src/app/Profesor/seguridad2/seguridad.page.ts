import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.page.html',
  styleUrls: ['./seguridad.page.scss'],
})
export class SeguridadPage implements OnInit {

    constructor(private menu: MenuController) {}
  
    ngOnInit() {
    }
  
    openMenu(){
      this.menu.toggle("second")
    }

}
