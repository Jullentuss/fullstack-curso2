import { Component, OnInit, Output, EventEmitter } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, FormBuilder } from '@angular/forms';
import { DestinoViaje } from '../models/destino-viaje.model';
=======
import { DestinoViaje } from '../models/destino-viaje.model';
import { FormGroup, FormBuilder } from '@angular/forms';
>>>>>>> arreglos-rutas

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  fg: FormGroup;
<<<<<<< HEAD

  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre: [''],
      url: ['']
    });
   
    this.fg.valueChanges.subscribe((form: any) => {
      console.log(`cambio el formulario ${form}`);
    }) 
  }
=======

  constructor(fb: FormBuilder) { 
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre: [''],
      url: ['']
    });

    this.fg.valueChanges.subscribe((form: any) => {
      console.log('registro en el formulario');
    });
  }

>>>>>>> arreglos-rutas

  ngOnInit(): void {
  }

  guardar(nombre: string, url: string): boolean {
    this.onItemAdded.emit(new DestinoViaje(nombre, url));
    return false;
  }
<<<<<<< HEAD
=======

>>>>>>> arreglos-rutas
}
