import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVisitorsPageComponent } from './list-visitors-page.component';

describe('ListVisitorsPageComponent', () => {
  let component: ListVisitorsPageComponent;
  let fixture: ComponentFixture<ListVisitorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListVisitorsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVisitorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
