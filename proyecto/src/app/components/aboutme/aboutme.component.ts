import { Component } from '@angular/core';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {
  miportfolio:any;
  constructor(private datos:InfoService ){
   
  }
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miportfolio=data;
    })
  }

}
