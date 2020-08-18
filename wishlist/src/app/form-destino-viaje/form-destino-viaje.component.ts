import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  fg: FormGroup;

  constructor(fb: FormBuilder) { 
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre: [''],
      url: ['']
    });
  }

  ngOnInit(): void {
  }

  guardar(nombre: string, url: string): boolean {
    this.onItemAdded.emit(new DestinoViaje(nombre, url));
    return false;
  }

}
