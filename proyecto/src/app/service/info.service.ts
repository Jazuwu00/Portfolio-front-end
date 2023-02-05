import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Info } from '../components/Info';
import { INFO } from './../components/mock-info';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }
   
  getInfo(): Observable<Info[]>{
   const infos= of(INFO);
    return infos
  }
}
