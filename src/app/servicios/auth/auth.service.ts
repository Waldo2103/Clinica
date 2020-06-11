import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Paciente, PacienteAConfirmar } from "../../clases/paciente";
import { AngularFireStorage } from '@angular/fire/storage';
import { Profesional, ProfesionalAConfirmar } from '../../clases/profesional';


//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private storage: AngularFireStorage
    ) {

  }
/********************************TODO RELACIONADO A REGISTRO DE USUARIO*********************************************** */
  registeruser(email: string, pass: string){
    return new Promise((resolve,reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email,pass)
      .then( userData => resolve(userData),
      err => reject (err));
    })
  }
//PACIENTE
  RegistrarClienteDatos(usuario: Paciente) {//, clave: string) {
    const d: PacienteAConfirmar = usuario as PacienteAConfirmar;
    //d.clave = clave;
    console.log("entre al servicio maaaann")
    return this.db.collection('pacientes').add({
      apellido: d.apellido,
      dni: d.dni,
      //clave: d.clave,
      correo: d.correo,
      foto: d.foto,
      nombre: d.nombre
    });
  }
  //PROFESIONAL
  RegistrarProfesionalDatos(usuario: Profesional) {//, clave: string) {
    const d: ProfesionalAConfirmar = usuario as ProfesionalAConfirmar;
    //d.clave = clave;
    console.log("entre al servicio profesional")
    return this.db.collection('profesionales').add({
      //foto: d.foto,
      correo: d.correo,
      apellido: d.apellido,
      nombre: d.nombre,
      dni: d.dni,
      //foto: d.foto,
      especialidades: d.especialidades,
      horarios: d.horarios,
      habilitado: false
    });
  }

   //Tarea para subir archivo
   public tareaCloudStorage(nombreArchivo: string, datos: any) {
    return this.storage.upload(nombreArchivo, datos);
  }

  //Referencia del archivo
  public referenciaCloudStorage(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }
  /******************************************************************************* */

  login(email: string, pass: string){
    return new Promise((resolve,reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email,pass)
      .then( userData => resolve(userData),
      err => reject (err));
    })
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  //Obtiene los datos del usuario en caso de que esté logueado. 
  getAuth(){
    return this.afAuth.authState.pipe( auth => auth );
  }

  updateProfile(newName:string, photoURL: string){    
    return this.afAuth.auth.currentUser.updateProfile({
      displayName: newName,
      photoURL: photoURL
    });
  }





}
