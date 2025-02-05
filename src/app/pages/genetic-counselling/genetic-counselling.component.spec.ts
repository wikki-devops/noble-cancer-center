import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneticCounsellingComponent } from './genetic-counselling.component';

describe('GeneticCounsellingComponent', () => {
  let component: GeneticCounsellingComponent;
  let fixture: ComponentFixture<GeneticCounsellingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneticCounsellingComponent]
    });
    fixture = TestBed.createComponent(GeneticCounsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
