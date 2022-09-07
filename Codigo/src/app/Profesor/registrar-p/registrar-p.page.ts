import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

/**
 * librerias
 */
 import { CrudProfesorService } from 'src/app/servicio/crud-profesor.service';
 import { profesorI } from '../model/profesor.interface';
 import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrar-p',
  templateUrl: './registrar-p.page.html',
  styleUrls: ['./registrar-p.page.scss'],
})
export class RegistrarPPage implements OnInit {

  profesor: profesorI={
    usuario:'',
    correo:'',
    contrasena:''
  }

  constructor(private navCtrl: NavController, private CrudProfesor : CrudProfesorService, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async guardar(){
    const alerta = await this.alertCtrl.create({
      header:'Grabo',
      message:'Grabo el profesor',
      buttons:['OK']
    });

    this.CrudProfesor.grabarCliente(this.profesor).then(()=>{
      alerta.present();
    });
  }
}
