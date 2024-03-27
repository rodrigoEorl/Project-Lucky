import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Trabajador } from 'src/app/models/trabajador.model';
import { TrabajadoresService } from 'src/app/services/trabajadores.service';

@Component({
  selector: 'app-edit-trabajador',
  templateUrl: './edit-trabajador.component.html',
  styleUrls: ['./edit-trabajador.component.css']
})

export class EditTrabajadorComponent implements OnInit {

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

  trabajadorDet: Trabajador = {
    idTrabajador: 0,
    nroDocumento: '',
    nombre: '',
    apellido: '',
    sexo: '',
    distrito: ''
  }
  
  reactiveForm = new FormGroup({
    idTrabajador: new FormControl('',),
    nroDocumento: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    sexo: new FormControl('', [Validators.required]),
    distrito: new FormControl('', [Validators.required])
  })

  constructor(private route: ActivatedRoute, private trabajadoresService : TrabajadoresService, private router:Router) { }


  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next:(params) => {
        const id =  params.get('id');
        if (id){
          this.trabajadoresService.getTrabajador(parseInt(id))
          .subscribe({
            next: (response) => {
              this.trabajadorDet = response;
            }
          });
        }
      }
    })
  }

  updateTrabajador(){
    this.trabajadoresService.updateTrabajador(this.trabajadorDet.idTrabajador,this.trabajadorDet).subscribe();
    //.subscribe({
      //next: (response) => {
        //this.router.navigate(['trabajadores']);
      //}
    //});
    this.router.navigate([''])
    .then(() => {
    window.location.reload();
    });
  }

  deleteTrabajador(id:number){
    this.trabajadoresService.deleteTrabajador(id).subscribe();
    this.router.navigate([''])
    .then(() => {
    window.location.reload();
    });
  }

}
