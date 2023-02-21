import { Component,OnInit,Input,Output} from '@angular/core';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {
  @Input() text: String ="";
  @Input() title: String ="";
  @Input() subtitle: String ="";

  experience:any;
  constructor(private datos:InfoService ){
   
  }
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      console.log(data);
      this.experience=data.experience;
    })
  }

 

}
