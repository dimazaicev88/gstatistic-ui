import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTypesPageComponent } from './event-types-page.component';

describe('EventTypesPageComponent', () => {
  let component: EventTypesPageComponent;
  let fixture: ComponentFixture<EventTypesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTypesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTypesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
