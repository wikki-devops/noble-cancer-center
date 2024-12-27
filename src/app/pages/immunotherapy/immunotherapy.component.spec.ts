import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunotherapyComponent } from './immunotherapy.component';

describe('ImmunotherapyComponent', () => {
  let component: ImmunotherapyComponent;
  let fixture: ComponentFixture<ImmunotherapyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImmunotherapyComponent]
    });
    fixture = TestBed.createComponent(ImmunotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
