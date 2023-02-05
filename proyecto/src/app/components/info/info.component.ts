import { Component, OnInit } from '@angular/core';
import {Observable,of} from 'rxjs'
import { InfoService } from '../../service/info.service';
import { Info } from '../Info';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  infos:Info[] = [];

  constructor(
    private infoService: InfoService)
    {}

 ngOnInit(): void {
 this.infoService.getInfo().subscribe((infos)=>[
  this.infos= infos
 ]);
  

 }

}
