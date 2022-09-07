import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Alumno/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./Alumno/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./Alumno/horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./Profesor/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'configuraciones',
    loadChildren: () => import('./Alumno/configuraciones/configuraciones.module').then( m => m.ConfiguracionesPageModule)
  },
  {
    path: 'seguridad',
    loadChildren: () => import('./Alumno/seguridad/seguridad.module').then( m => m.SeguridadPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./Alumno/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./Profesor/generar-qr/generar-qr.module').then( m => m.GenerarQrPageModule)
  },
  {
    path: 'alumnos2',
    loadChildren: () => import('./Profesor/alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: 'ayuda2',
    loadChildren: () => import('./Profesor/ayuda2/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'seguridad2',
    loadChildren: () => import('./Profesor/seguridad2/seguridad.module').then( m => m.SeguridadPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Alumno/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./Alumno/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'login-p',
    loadChildren: () => import('./Profesor/login-p/login-p.module').then( m => m.LoginPPageModule)
  },
  {
    path: 'registrar-p',
    loadChildren: () => import('./Profesor/registrar-p/registrar-p.module').then( m => m.RegistrarPPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
