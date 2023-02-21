import { Component,EventEmitter,Input, Output } from '@angular/core';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent  {
  skills:any;
  constructor(private datos:InfoService ){
   
  }
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      console.log(data);
      this.skills=data.skills;
    })
  }
  getColor(color:String){
    switch (color ){
      case "blue":
        return 'blue';
      default:
        return 'green'
    }

    
  }
}
