import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { OncologyComponent } from './pages/oncology/oncology.component';
import { DaycarechemotherapyComponent } from './pages/daycarechemotherapy/daycarechemotherapy.component';
import { TargetedtherapyComponent } from './pages/targetedtherapy/targetedtherapy.component';
import { ImmunotherapyComponent } from './pages/immunotherapy/immunotherapy.component';
import { CancerscreeningComponent } from './pages/cancerscreening/cancerscreening.component';
import { CancerVaccinationComponent } from './pages/cancer-vaccination/cancer-vaccination.component';
import { GeneticCounsellingComponent } from './pages/genetic-counselling/genetic-counselling.component';
import { PainAndPalliativeCareComponent } from './pages/pain-and-palliative-care/pain-and-palliative-care.component';
import { PsychoOncologyConsultationComponent } from './pages/psycho-oncology-consultation/psycho-oncology-consultation.component';
// service page

import { AboutDoctorComponent } from './pages/about-doctor/about-doctor.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'oncology-consultation', component: OncologyComponent },
  { path: 'daycarechemotherapy', component: DaycarechemotherapyComponent},
  { path: 'targetedtherapy', component: TargetedtherapyComponent },
  { path: 'immunotherapy', component: ImmunotherapyComponent },
  { path: 'cancerscreening', component: CancerscreeningComponent },
  { path: 'cancer-vaccination', component: CancerVaccinationComponent },
  { path: 'genetic-counselling', component: GeneticCounsellingComponent },
  { path: 'pain-and-palliative-care', component: PainAndPalliativeCareComponent },
  { path: 'psycho-oncology-consultation', component: PsychoOncologyConsultationComponent },
  { path: 'about-doctor', component: AboutDoctorComponent },
  { path: 'facilities', component: FacilitiesComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
