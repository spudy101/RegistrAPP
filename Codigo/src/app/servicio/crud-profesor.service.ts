import { Injectable } from '@angular/core';
/**
 * librerias
 */
 import { profesorI } from '../profesor/model/profesor.interface';
 import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
 import { Observable } from 'rxjs';
 import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudProfesorService {

  private profesorCollection: AngularFirestoreCollection<profesorI>;
  private profesores: Observable<profesorI[]>;

  constructor(db: AngularFirestore) {
    this.profesorCollection= db.collection<profesorI>('profesor');
    this.profesores = this.profesorCollection.snapshotChanges().pipe(map(
      accion =>{
        return accion.map(
          a=>{
            const data= a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          }
        )
      }
    ));
  }
  // metodos edl CRUD
  // agregar
  grabarCliente(pro: profesorI){
    return this.profesorCollection.add(pro);
  }
  //listar
  listarTodo(){
    return this.profesores;
  }
  //eliminar
  eliminarCliente(id:string){
    return this.profesorCollection.doc(id).delete();
  }
  //actualizar
  actualizarCliente(id:string,NuevoProfesor: profesorI){
    return this.profesorCollection.doc(id).update(NuevoProfesor);
  }
  //buscar registro
  buscarCliente(id:string){
    return this.profesorCollection.doc<profesorI>(id).valueChanges();
  }
}
