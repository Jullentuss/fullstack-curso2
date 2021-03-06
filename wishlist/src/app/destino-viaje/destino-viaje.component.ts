import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})

export class DestinoviajeComponent implements OnInit {
  @Input() destino: DestinoViaje;
  @Input() posicion: number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clicked: EventEmitter<DestinoViaje>;

  constructor() {
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ir(): boolean {
    this.clicked.emit(this.destino);
    return false;
  }
}
