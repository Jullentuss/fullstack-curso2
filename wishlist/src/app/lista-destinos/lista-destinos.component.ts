import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import { DestinosApiClient } from '../models/destinos-api-client.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})

export class ListaDestinosComponent implements OnInit {
@Output() onItedAdded: EventEmitter<DestinoViaje>;

  constructor(public destinoApiClient: DestinosApiClient) {
    this.onItedAdded = new EventEmitter();
  }

  ngOnInit(): void {
  }

  agregar(d: DestinoViaje): void {
    this.destinoApiClient.add(d);
    this.onItedAdded.emit(d);
  }

  elegido(e: DestinoViaje) {
    this.destinoApiClient.getAll().forEach(x => x.setSelected(false));
    e.setSelected(true);
  }
}