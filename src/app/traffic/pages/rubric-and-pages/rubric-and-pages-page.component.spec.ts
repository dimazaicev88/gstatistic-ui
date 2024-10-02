import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricAndPagesPageComponent } from './rubric-and-pages-page.component';

describe('AttentivenessPageComponent', () => {
  let component: RubricAndPagesPageComponent;
  let fixture: ComponentFixture<RubricAndPagesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RubricAndPagesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RubricAndPagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
