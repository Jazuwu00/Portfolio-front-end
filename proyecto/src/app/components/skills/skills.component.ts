import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent  {
  @Input() number: String ="";
  @Input() title: String ="";
  @Input() color: String ="";
  @Output() btnClick= new EventEmitter()



  onClick(){
    this.btnClick.emit()
    console.log("hola")
  }
}
