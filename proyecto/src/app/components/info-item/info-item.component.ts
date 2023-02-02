import { Component,Input, OnInit } from '@angular/core';
import { Info } from '../Info';
import { INFO } from '../mock-info';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.css']
})
export class InfoItemComponent implements OnInit {
  @Input() info: Info = INFO[0]
  constructor(){}

  ngOnInit(): void {
   
  }

}
