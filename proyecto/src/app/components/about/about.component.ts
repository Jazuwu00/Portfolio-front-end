import { Component, EventEmitter, Output } from '@angular/core';
import { InfoService } from 'src/app/service/info.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  miportfolio:any;
  constructor(private datos:InfoService ){
   
  }
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miportfolio=data;
    })
  }
  @Output() btnClick= new EventEmitter()



  onClick(){
    this.btnClick.emit()
    console.log("hola")
  }

  addSeccion(){
    console.log("si")
  }
}
