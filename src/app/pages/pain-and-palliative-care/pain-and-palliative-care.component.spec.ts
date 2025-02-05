import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainAndPalliativeCareComponent } from './pain-and-palliative-care.component';

describe('PainAndPalliativeCareComponent', () => {
  let component: PainAndPalliativeCareComponent;
  let fixture: ComponentFixture<PainAndPalliativeCareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainAndPalliativeCareComponent]
    });
    fixture = TestBed.createComponent(PainAndPalliativeCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
