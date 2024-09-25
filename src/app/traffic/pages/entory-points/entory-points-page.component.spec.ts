import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntoryPointsPageComponent } from './entory-points-page.component';

describe('EntoryPointsPageComponent', () => {
  let component: EntoryPointsPageComponent;
  let fixture: ComponentFixture<EntoryPointsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntoryPointsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntoryPointsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
