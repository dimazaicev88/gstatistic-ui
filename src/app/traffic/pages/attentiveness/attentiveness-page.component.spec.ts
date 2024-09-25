import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentivenessPageComponent } from './attentiveness-page.component';

describe('AttentivenessPageComponent', () => {
  let component: AttentivenessPageComponent;
  let fixture: ComponentFixture<AttentivenessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttentivenessPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttentivenessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
