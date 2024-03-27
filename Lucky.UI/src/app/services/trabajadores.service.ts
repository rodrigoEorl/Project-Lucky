import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Trabajador } from '../models/trabajador.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http : HttpClient) { }

  getTrabajadores(): Observable<Trabajador[]>{
      return this.http.get<Trabajador[]>(this.baseApiUrl + 'api/Trabajador/GetTrabajadores');
  }

  addTrabajador(addTrabajadorRequest: Trabajador): Observable<string>{
    return this.http.post<string>(this.baseApiUrl + 'api/Trabajador/Create',addTrabajadorRequest);
  }

  getTrabajador(id: number): Observable<Trabajador> {
    return this.http.get<Trabajador>(this.baseApiUrl + 'api/Trabajador/GetPorCodigo/' + id);
  }

  updateTrabajador(id: number, updateTrabajadorRequest: Trabajador): Observable<string>{
    return this.http.put<string>(this.baseApiUrl + 'api/Trabajador/Update', updateTrabajadorRequest);
  }

  deleteTrabajador(id: number): Observable<string>{
    return this.http.delete<string>(this.baseApiUrl + 'api/Trabajador/Remove/' + id);
  }
}
