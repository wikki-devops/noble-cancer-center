import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaycarechemotherapyComponent } from './daycarechemotherapy.component';

describe('DaycarechemotherapyComponent', () => {
  let component: DaycarechemotherapyComponent;
  let fixture: ComponentFixture<DaycarechemotherapyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaycarechemotherapyComponent]
    });
    fixture = TestBed.createComponent(DaycarechemotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
