import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nombre: String;

  usuario = {
    correo: '',
    contrasena: ''
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  formulario(){
    console.log('form submit');
  }

  mover(){
    this.navCtrl.navigateForward("home");
  }


}
