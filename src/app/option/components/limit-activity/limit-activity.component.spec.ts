import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitActivityComponent } from './limit-activity.component';

describe('LimitActivityComponent', () => {
  let component: LimitActivityComponent;
  let fixture: ComponentFixture<LimitActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimitActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
