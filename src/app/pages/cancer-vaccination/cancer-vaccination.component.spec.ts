import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerVaccinationComponent } from './cancer-vaccination.component';

describe('CancerVaccinationComponent', () => {
  let component: CancerVaccinationComponent;
  let fixture: ComponentFixture<CancerVaccinationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancerVaccinationComponent]
    });
    fixture = TestBed.createComponent(CancerVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
