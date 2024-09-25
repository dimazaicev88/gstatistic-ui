import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexingPageComponent } from './indexing-page.component';

describe('IndexingPageComponent', () => {
  let component: IndexingPageComponent;
  let fixture: ComponentFixture<IndexingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
