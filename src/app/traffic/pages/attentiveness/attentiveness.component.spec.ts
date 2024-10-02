import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentivenessComponent } from './attentiveness.component';

describe('AttentivenessComponent', () => {
  let component: AttentivenessComponent;
  let fixture: ComponentFixture<AttentivenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttentivenessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttentivenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
