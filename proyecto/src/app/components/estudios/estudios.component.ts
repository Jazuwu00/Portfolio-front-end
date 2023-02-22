import { Component } from '@angular/core';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent {

    estudios:any;
    constructor(private datos:InfoService ){
     
    }
    ngOnInit(): void {
      this.datos.obtenerDatos().subscribe(data => {
        console.log(data);
        this.estudios=data.studies;
      })
    }
  
   
  
}
