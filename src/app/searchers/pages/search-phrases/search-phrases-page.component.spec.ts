import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPhrasesPageComponent } from './search-phrases-page.component';

describe('SearchPhrasesPageComponent', () => {
  let component: SearchPhrasesPageComponent;
  let fixture: ComponentFixture<SearchPhrasesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPhrasesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPhrasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
