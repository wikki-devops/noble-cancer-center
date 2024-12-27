import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OncologyComponent } from './pages/oncology/oncology.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { DaycarechemotherapyComponent } from './pages/daycarechemotherapy/daycarechemotherapy.component';
import { ImmunotherapyComponent } from './pages/immunotherapy/immunotherapy.component';
import { TargetedtherapyComponent } from './pages/targetedtherapy/targetedtherapy.component';
import { CancerscreeningComponent } from './pages/cancerscreening/cancerscreening.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'oncology', component: OncologyComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'daycarechemotherapy', component: DaycarechemotherapyComponent},
  { path: 'immunotherapy', component: ImmunotherapyComponent },
  { path: 'targetedtherapy', component: TargetedtherapyComponent },
  { path: 'cancerscreening', component: CancerscreeningComponent },
  { path: 'facilities', component: FacilitiesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
