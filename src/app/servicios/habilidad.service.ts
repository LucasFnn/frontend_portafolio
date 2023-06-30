import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../clases/habilidad';


@Injectable({
  providedIn: 'root'
})
export class HabilidadService {


  private urlHabilidades = "https://lgf-portafolio.onrender.com/habilidades";
  private urlHabilidadesEliminar = "https://lgf-portafolio.onrender.com/habilidades/eliminar";
  private urlHabilidadesAgregar = "https://lgf-portafolio.onrender.com/habilidades/guardarhabilidad"
  private urlHabilidadesEditar = "https://lgf-portafolio.onrender.com/habilidades/{id}"

  constructor(private httpClient:HttpClient) { }

  obtenerListaHabilidades():Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(`${this.urlHabilidades}`);
   }


   eliminarHabilidad(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.urlHabilidadesEliminar}/${id}`);
  }

  agregarHabilidad(habilidad:Habilidad): Observable<Object>{
   return this.httpClient.post(`${this.urlHabilidadesAgregar}`, habilidad)
}

obtenerHabilidadPorId(id:number){
  return this.httpClient.get<Habilidad>(`${this.urlHabilidadesAgregar}/${id}`);

}

actualizarHabilidad(id:number, habilidad:Habilidad): Observable<Object>{
  return this.httpClient.put(`${this.urlHabilidades}/${id}`, habilidad);
}

}