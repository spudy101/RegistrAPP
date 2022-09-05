import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-p',
  templateUrl: './login-p.page.html',
  styleUrls: ['./login-p.page.scss'],
})
export class LoginPPage implements OnInit {
  nombre: String;

  usuario = {
    correo: '',
    contrasena: ''
  };

  constructor(private navCtrl: NavController) {
  }


  ngOnInit() {
  }

  formulario(){
    console.log('form submit');
  }

  mover(){
    this.navCtrl.navigateForward("generar-qr");
  }


}
