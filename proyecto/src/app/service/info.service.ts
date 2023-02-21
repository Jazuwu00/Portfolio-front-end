import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }
   
  obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/data.json')
  }
 
}
