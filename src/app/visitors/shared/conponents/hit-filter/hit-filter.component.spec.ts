import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitFilterComponent } from './hit-filter.component';

describe('HitFilterComponent', () => {
  let component: HitFilterComponent;
  let fixture: ComponentFixture<HitFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HitFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HitFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
