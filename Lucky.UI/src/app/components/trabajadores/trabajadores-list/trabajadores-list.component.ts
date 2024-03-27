import { Component, OnInit } from '@angular/core';
import { Trabajador } from 'src/app/models/trabajador.model';
import { TrabajadoresService } from 'src/app/services/trabajadores.service';

@Component({
  selector: 'app-trabajadores-list',
  templateUrl: './trabajadores-list.component.html',
  styleUrls: ['./trabajadores-list.component.css']
})
export class TrabajadoresListComponent implements OnInit {

  trabajadores: Trabajador[] = [];
  constructor(private trabajadoresService: TrabajadoresService) { }

  ngOnInit(): void {
      this.trabajadoresService.getTrabajadores()
      .subscribe({
        next: (trabajadores) => {
          this.trabajadores = trabajadores;
        },
        error: (response) => {
          console.log(response);
        }
  })
  }

}
