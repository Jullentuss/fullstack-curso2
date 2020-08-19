import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import { FormGroup, FormBuilder, Validators, ValidatorFn, FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { filter, map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  fg: FormGroup;
  minLong = 3;
  searchResults: string[];

  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre: ['', Validators.compose([
        Validators.required,
        this.validarNombre(this.minLong)
      ])],
      url: ['', Validators.required]
    });

    this.fg.valueChanges.subscribe((form: any) => {
      console.log('registro en el formulario ', form);
    });
  }

  ngOnInit(): void {
    const elemNombre = <HTMLInputElement>document.getElementById('nombre');
    fromEvent(elemNombre, 'input')
      .pipe(
        map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
        filter(text => text.length > 3),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(() => ajax('/assets/datos.json'))
      ).subscribe(AjaxResponse => {
        this.searchResults =  AjaxResponse.response;
      })
  }

  guardar(nombre: string, url: string): boolean {
    this.onItemAdded.emit(new DestinoViaje(nombre, url));
    return false;
  }

  validarNombre(ml: number): ValidatorFn {
    return (control: FormControl): { [s: string]: boolean } | null => {
      const L = control.value.toString().trim().length;
      return (L > 0 && L < ml) ? { minlong: true } : null;
    }
  }
}
