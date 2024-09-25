import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCompanyPageComponent } from './compare-company-page.component';

describe('CompareCompanyPageComponent', () => {
  let component: CompareCompanyPageComponent;
  let fixture: ComponentFixture<CompareCompanyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareCompanyPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareCompanyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
