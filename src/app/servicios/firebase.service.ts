import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { especialidad } from '../clases/especialidad';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) { }
  /**********ESPECIALIDADES****** */
  //Trae Todos
  public getEspecialidades() {
    //console.log("entre a servicio", this.firestore.collection('mercados').snapshotChanges())
    return this.db.collection<especialidad>('especialidades').snapshotChanges()
              .pipe( delay(2000) );
  }
  //Alta
  public createEspecialidad(id:string, data: {idEspecialidad: string, nombre: string}) {
    return this.db.collection('especialidades').doc(id).set(data);
  }
  //Trae 1
  public getEspecialidad(documentId: string) {
    return this.db.collection('especialidades').doc(documentId).snapshotChanges();
  }
}
