import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingNowComponent } from './reading-now.component';

describe('ReadingNowComponent', () => {
  let component: ReadingNowComponent;
  let fixture: ComponentFixture<ReadingNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
