import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDoctorComponent } from './about-doctor.component';

describe('AboutDoctorComponent', () => {
  let component: AboutDoctorComponent;
  let fixture: ComponentFixture<AboutDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutDoctorComponent]
    });
    fixture = TestBed.createComponent(AboutDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
