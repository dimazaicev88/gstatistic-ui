import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitsPageComponent } from './hits-page.component';

describe('HitsPageComponent', () => {
  let component: HitsPageComponent;
  let fixture: ComponentFixture<HitsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HitsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
