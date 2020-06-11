import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sacar-turno',
  templateUrl: './sacar-turno.component.html',
  styleUrls: ['./sacar-turno.component.css']
})
export class SacarTurnoComponent implements OnInit {

  focus1;
  colas = [];
  public opcionSeleccionada = "0";
  public verSeleccion = "";

  constructor() { 
    this.colas = ["A","B","C"];
  }

  ngOnInit(): void {
  }

  capturar(){
    this.verSeleccion = this.opcionSeleccionada;
  }

}
