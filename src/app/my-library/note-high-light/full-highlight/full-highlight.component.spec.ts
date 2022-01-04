import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullHighlightComponent } from './full-highlight.component';

describe('FullHighlightComponent', () => {
  let component: FullHighlightComponent;
  let fixture: ComponentFixture<FullHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullHighlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
