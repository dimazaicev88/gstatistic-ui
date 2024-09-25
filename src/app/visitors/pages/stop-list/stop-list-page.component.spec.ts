import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopListPageComponent } from './stop-list-page.component';

describe('StopListPageComponent', () => {
  let component: StopListPageComponent;
  let fixture: ComponentFixture<StopListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StopListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
