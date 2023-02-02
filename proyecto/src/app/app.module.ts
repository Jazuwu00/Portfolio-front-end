import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InfoComponent } from './components/info/info.component';
import { InfoItemComponent } from './components/info-item/info-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SeccionComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    InfoComponent,
    InfoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
