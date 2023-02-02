import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Output() btnClick= new EventEmitter()



  onClick(){
    this.btnClick.emit()
    console.log("hola")
  }
  ngOnInit(): void{}

  addSeccion(){
    console.log("si")
  }
}
