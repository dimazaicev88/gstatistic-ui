import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionsSearchersPageComponent } from './transitions-searchers-page.component';

describe('TransitionsSearchersPageComponent', () => {
  let component: TransitionsSearchersPageComponent;
  let fixture: ComponentFixture<TransitionsSearchersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransitionsSearchersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransitionsSearchersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
