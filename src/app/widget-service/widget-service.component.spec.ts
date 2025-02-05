import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetServiceComponent } from './widget-service.component';

describe('WidgetServiceComponent', () => {
  let component: WidgetServiceComponent;
  let fixture: ComponentFixture<WidgetServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetServiceComponent]
    });
    fixture = TestBed.createComponent(WidgetServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
