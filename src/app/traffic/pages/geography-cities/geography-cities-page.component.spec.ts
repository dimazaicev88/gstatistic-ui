import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographyCitiesPageComponent } from './geography-cities-page.component';

describe('GeographyCitiesPageComponent', () => {
  let component: GeographyCitiesPageComponent;
  let fixture: ComponentFixture<GeographyCitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeographyCitiesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeographyCitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
