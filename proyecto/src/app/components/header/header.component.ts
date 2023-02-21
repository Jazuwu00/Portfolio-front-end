import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/service/info.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
