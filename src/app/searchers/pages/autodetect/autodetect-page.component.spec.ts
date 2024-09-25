import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutodetectPageComponent } from './autodetect-page.component';

describe('AutodetectPageComponent', () => {
  let component: AutodetectPageComponent;
  let fixture: ComponentFixture<AutodetectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutodetectPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutodetectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
