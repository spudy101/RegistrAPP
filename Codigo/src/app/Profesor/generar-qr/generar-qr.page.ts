import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {
  handlerMessage = '';
  imagen = '';
  roleMessage = '';

  constructor(private menu: MenuController, private alertController: AlertController) {
  }


  ngOnInit() {
  }

  openMenu(){
    this.menu.toggle("second")
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'clase:"PGY004D"',
      message: '¿Quieres generar un QR?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = '';
          },
        },
        {
          text: 'confirmar',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Escanea tu codigo Aqui';
            this.imagen = 'QR';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

}
