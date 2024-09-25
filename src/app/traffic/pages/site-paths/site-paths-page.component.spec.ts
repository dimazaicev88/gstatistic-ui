import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePathsPageComponent } from './site-paths-page.component';

describe('SitePathsPageComponent', () => {
  let component: SitePathsPageComponent;
  let fixture: ComponentFixture<SitePathsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitePathsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitePathsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
