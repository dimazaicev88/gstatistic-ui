import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryPointsPageComponent } from './entry-points-page.component';

describe('EntoryPointsPageComponent', () => {
  let component: EntryPointsPageComponent;
  let fixture: ComponentFixture<EntryPointsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryPointsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryPointsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
