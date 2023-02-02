import { Component } from '@angular/core';
import { INFO } from '../mock-info';
import { Info } from '../Info';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
 infos:Info[] = INFO;
}
