import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychoOncologyConsultationComponent } from './psycho-oncology-consultation.component';

describe('PsychoOncologyConsultationComponent', () => {
  let component: PsychoOncologyConsultationComponent;
  let fixture: ComponentFixture<PsychoOncologyConsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsychoOncologyConsultationComponent]
    });
    fixture = TestBed.createComponent(PsychoOncologyConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
