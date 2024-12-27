import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetedtherapyComponent } from './targetedtherapy.component';

describe('TargetedtherapyComponent', () => {
  let component: TargetedtherapyComponent;
  let fixture: ComponentFixture<TargetedtherapyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TargetedtherapyComponent]
    });
    fixture = TestBed.createComponent(TargetedtherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
