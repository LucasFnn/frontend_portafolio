import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudio } from '../clases/estudio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  constructor(private httpClient:HttpClient) { }

  private urlEstudios = "https://lgf-portafolio.onrender.com/estudios";
  private urlEstudiosEliminar = "https://lgf-portafolio.onrender.com/estudios/eliminar";
  private urlEstudiosAgregar = "https://lgf-portafolio.onrender.com/estudios/guardarestudio";

  obtenerListaEstudios():Observable<Estudio[]>{
    return this.httpClient.get<Estudio[]>(`${this.urlEstudios}`);
   }

   eliminarEstudio(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.urlEstudiosEliminar}/${id}`);
  }

  agregarEstudio(estudio: Estudio): Observable<Object>{
    return this.httpClient.post(`${this.urlEstudiosAgregar}`, estudio)
 }


 actualizarEstudio(id:number, estudio:Estudio): Observable<Object>{
  return this.httpClient.put(`${this.urlEstudios}/${id}`, estudio);
}


}
