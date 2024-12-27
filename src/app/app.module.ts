import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { OncologyComponent } from './pages/oncology/oncology.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { CtaComponent } from './pages/cta/cta.component';
import { DaycarechemotherapyComponent } from './pages/daycarechemotherapy/daycarechemotherapy.component';
import { PagebannerComponent } from './pages/pagebanner/pagebanner.component';
import { ImmunotherapyComponent } from './pages/immunotherapy/immunotherapy.component';
import { TargetedtherapyComponent } from './pages/targetedtherapy/targetedtherapy.component';
import { PsychooncologyComponent } from './pages/psychooncology/psychooncology.component';
import { CancerscreeningComponent } from './pages/cancerscreening/cancerscreening.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OncologyComponent,
    ContactComponent,
    FaqComponent,
    CtaComponent,
    DaycarechemotherapyComponent,
    PagebannerComponent,
    ImmunotherapyComponent,
    TargetedtherapyComponent,
    PsychooncologyComponent,
    CancerscreeningComponent,
    FacilitiesComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
