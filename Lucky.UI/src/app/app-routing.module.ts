import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajadoresListComponent } from './components/trabajadores/trabajadores-list/trabajadores-list.component';
import { AddTrabajadorComponent } from './components/trabajadores/add-trabajador/add-trabajador.component';
import { EditTrabajadorComponent } from './components/trabajadores/edit-trabajador/edit-trabajador.component';

const routes: Routes = [
  {
    path:'',
    component: TrabajadoresListComponent,
  },
  {
    path:'trabajadores',
    component: TrabajadoresListComponent,
  },
  {
    path:'trabajadores/agregar',
    component: AddTrabajadorComponent,
  },
  {
    path:'trabajadores/editar/:id',
    component: EditTrabajadorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
