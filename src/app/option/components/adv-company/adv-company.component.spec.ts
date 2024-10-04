import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvCompanyComponent } from './adv-company.component';

describe('AdvCompanyComponent', () => {
  let component: AdvCompanyComponent;
  let fixture: ComponentFixture<AdvCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
