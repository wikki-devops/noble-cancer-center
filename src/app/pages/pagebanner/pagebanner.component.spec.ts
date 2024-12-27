import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagebannerComponent } from './pagebanner.component';

describe('PagebannerComponent', () => {
  let component: PagebannerComponent;
  let fixture: ComponentFixture<PagebannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagebannerComponent]
    });
    fixture = TestBed.createComponent(PagebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
