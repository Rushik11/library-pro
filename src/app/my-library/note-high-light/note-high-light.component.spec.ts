import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteHighLightComponent } from './note-high-light.component';

describe('NoteHighLightComponent', () => {
  let component: NoteHighLightComponent;
  let fixture: ComponentFixture<NoteHighLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteHighLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteHighLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
