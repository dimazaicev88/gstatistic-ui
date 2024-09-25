import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographyCountryPageComponent } from './geography-country-page.component';

describe('GeographyCountryPageComponent', () => {
  let component: GeographyCountryPageComponent;
  let fixture: ComponentFixture<GeographyCountryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeographyCountryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeographyCountryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
