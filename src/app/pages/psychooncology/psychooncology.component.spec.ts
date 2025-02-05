import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychooncologyComponent } from './psychooncology.component';

describe('PsychooncologyComponent', () => {
  let component: PsychooncologyComponent;
  let fixture: ComponentFixture<PsychooncologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsychooncologyComponent]
    });
    fixture = TestBed.createComponent(PsychooncologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
