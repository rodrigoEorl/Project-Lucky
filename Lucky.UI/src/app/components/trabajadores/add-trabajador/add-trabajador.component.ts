import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajador } from 'src/app/models/trabajador.model';
import { TrabajadoresService } from 'src/app/services/trabajadores.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-trabajador',
  templateUrl: './add-trabajador.component.html',
  styleUrls: ['./add-trabajador.component.css']
})
export class AddTrabajadorComponent implements OnInit {

  get nroDocumento(){
    return this.reactiveForm.get('nroDocumento') as FormControl;
  }
  get nombre(){
    return this.reactiveForm.get('nombre') as FormControl;
  }
  get apellido(){
    return this.reactiveForm.get('apellido') as FormControl;
  }
  get sexo(){
    return this.reactiveForm.get('sexo') as FormControl;
  }
  get distrito(){
    return this.reactiveForm.get('distrito') as FormControl;
  }

  addTrabajadorRequest: Trabajador = {
    idTrabajador: 0,
    nroDocumento: '',
    nombre: '',
    apellido: '',
    sexo: '',
    distrito: ''
  }

  reactiveForm = new FormGroup({
    nroDocumento: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    sexo: new FormControl('', [Validators.required]),
    distrito: new FormControl('', [Validators.required])
  })

  constructor(private trabajadoresService: TrabajadoresService,private router: Router) { }

  ngOnInit(): void {
  }

  addTrabajador(){
    this.trabajadoresService.addTrabajador(this.addTrabajadorRequest).subscribe();
    this.router.navigate([''])
    .then(() => {
    window.location.reload();
    });
  }
}
