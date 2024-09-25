import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionsPageComponent } from './transitions-page.component';

describe('TransitionsPageComponent', () => {
  let component: TransitionsPageComponent;
  let fixture: ComponentFixture<TransitionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransitionsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransitionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
