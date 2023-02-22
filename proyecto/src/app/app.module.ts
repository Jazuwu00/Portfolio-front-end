import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { EstudiosComponent } from './components/estudios/estudios.component';


@NgModule({
  declarations: [
    AppComponent,
    SeccionComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    AboutmeComponent,
    EstudiosComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
