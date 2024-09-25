import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitPointsPageComponent } from './exit-points-page.component';

describe('ExitPointsPageComponent', () => {
  let component: ExitPointsPageComponent;
  let fixture: ComponentFixture<ExitPointsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExitPointsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitPointsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
