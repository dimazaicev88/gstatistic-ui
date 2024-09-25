import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionVisitorsPageComponent } from './session-visitors-page.component';

describe('SessionVisitorsPageComponent', () => {
  let component: SessionVisitorsPageComponent;
  let fixture: ComponentFixture<SessionVisitorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionVisitorsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionVisitorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
