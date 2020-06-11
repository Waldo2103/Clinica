import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Paciente } from 'src/app/clases/paciente';



@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus1;
    focus2;
    focus3;
    focus4;
    focus5;
    focus6;
    form: FormGroup;

    usuario = new Paciente();
    //PARA SUBIR FOTO
    public mensajeArchivo = 'No hay un archivo seleccionado';
    public datosFormulario = new FormData();
    public nombreArchivo = '';
    public URLPublica = '';
    public URLs = [];
    public porcentaje = 0;
    public finalizado = false;
    public foto1 = new FormData();
    public foto2 = new FormData();
    public array = [];

  validation_messages = {
    'mail': [
      { type: 'required', message: 'Debe ingresar un email.' },
      { type: 'email', message: 'Debe ingresar un email válido.' }
    ],
    'password': [
      { type: 'required', message: 'Debe ingresar una contraseña.' }
    ],
    'password2': [
      {type:'required', message:'Lo ingresado debe coincidir con la contraseña anterior.'}
    ]
  };

 mail:string;
 password:string;
 password2:string;
  modalText: string;

  constructor(private authService: AuthService,
    private router: Router, 
    private formBuilder: FormBuilder,
    ) { 

      this.form = this.formBuilder.group({
        mail: new FormControl('', Validators.compose([
          Validators.required,
          Validators.email
        ])),
        password: new FormControl('', Validators.required),
        password2: new FormControl('', Validators.required),
        nombre: new FormControl('', Validators.required),
        apellido: new FormControl('', Validators.required),
        dni: new FormControl('', Validators.required),
        foto: new FormControl('', Validators.required)
      });

    }

ngOnInit() {
    
}
ngOnChange(){

}
loguear(user: any){
  //this.resulService.createLog(user);
}

public async RegistrarCliente(){
    //Subo foto para despues pasarle la ruta a la base
    //await this.subirArchivo()
    
    this.URLPublica = `{
        foto1: ${this.array[0]},
        foto2: ${this.array[1]}
    }`
    console.log(this.URLPublica)
    //AGREGO EL CLIENTE A LA BASE
    this.usuario = {
        correo: this.form.get('mail').value,
        nombre: this.form.get('nombre').value,
        apellido: this.form.get('apellido').value,
        dni: this.form.get('dni').value,
        foto: this.URLPublica
        };
    this.authService.RegistrarClienteDatos(this.usuario).then(auth => {
        console.log("dvolvio servicio a REGISTRARCLiente")
        this.usuario = new Paciente();
        alert( '¡Usted ha sido registrado!');
    }).catch(err => {
        alert('Error en el registro.');
        console.log(err);
    });
}

//PARA SUBIR FOTO
  //Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivo(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        (<HTMLButtonElement>document.getElementById("subirOK")).disabled = false;
        this.mensajeArchivo = `Archivo preparado: ${event.target.files[i].name}`;
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('foto');
        this.datosFormulario.append('foto', event.target.files[i], event.target.files[i].name)
      }
    } else {
      (<HTMLButtonElement>document.getElementById("subirOK")).disabled = true;
      this.mensajeArchivo = 'No hay un archivo seleccionado';
    }
  }
  //Sube el archivo a Cloud Storage
  
  public subirArchivo() {
    this.URLPublica = ''
    let archivo = this.datosFormulario.get('foto');
    let referencia = this.authService.referenciaCloudStorage(this.nombreArchivo);
    let tarea = this.authService.tareaCloudStorage(this.nombreArchivo, archivo);
    //Cambia el porcentaje
    tarea.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje);
      if (this.porcentaje == 100) {
        this.finalizado = true;
      }
    });
    referencia.getDownloadURL().subscribe((URL) => {
      this.URLPublica = URL;
      console.log(this.URLPublica);
      while (this.URLPublica === '') {
        (<HTMLButtonElement>document.getElementById("subirOK")).disabled = true;
      }
      this.array.push(this.URLPublica);
      (<HTMLButtonElement>document.getElementById("subirOK")).disabled = false;
    });
    
  }

OnSubmitRegister(){
    //console.log("entre a onsubmitregister")
  if (this.form.get('password').value === this.form.get('password2').value) {
    this.authService.registeruser(this.form.get('mail').value, this.form.get('password').value).then( authService => {
      let f = new Date;
        var fec: string = f.getDate()+"/"+f.getMonth()+"/"+f.getUTCFullYear()+" - "+f.getUTCHours()+":"+f.getUTCMinutes()+":"+f.getUTCSeconds();
        let data = { email: this.form.get('mail').value,fec}
        this.loguear(data);
        localStorage.setItem("email", this.form.get('mail').value);
        //AGREGO EL CLIENTE A LA BASE
        this.RegistrarCliente()
      this.router.navigate(['/Clinica/login']);
    }).catch(error => {
      //(<HTMLButtonElement>document.getElementById('btnModal')).click();
      if (error.code === 'auth/email-already-in-use') {
        this.modalText = "El usuario ya existe!";
        console.log(this.modalText)
        //this.toastService.error('Usuario no encontrado.');
      } else if (error.code === 'auth/wrong-password') {
        this.modalText = "Contraseña incorrecta.";
        console.log(this.modalText)
        //this.toastService.error('Contraseña incorrecta.');
      } else {
        console.log(error.code,". ERROR CODE")
        this.modalText = "Ocurrió un error con el servidor";
        console.log(this.modalText)
      }
    }/*err=> alert('los datos son incorrectos', err.code)*/);
  } else {
    this.modalText = "Las contraseñas no coinciden.";
    console.log(this.modalText)
    //(<HTMLButtonElement>document.getElementById('btnModal')).click();
  }
  
}

}
