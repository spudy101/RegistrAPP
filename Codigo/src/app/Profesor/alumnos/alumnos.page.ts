import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  constructor(private menu: MenuController, private alertController: AlertController) {}

  ngOnInit() {
  }

  openMenu(){
    this.menu.toggle("second")
  }

  async guardar() {
    const alert = await this.alertController.create({
      header: 'Estas seguro que quieres guardar la asistencia',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }

  async eliminar() {
    const alert = await this.alertController.create({
      header: 'Estas seguro que quieres eliminar la asistencia',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }
}

