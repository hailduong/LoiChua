import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGodWordsComponent } from './single-god-words.component';

describe('SingleGodWordsComponent', () => {
  let component: SingleGodWordsComponent;
  let fixture: ComponentFixture<SingleGodWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleGodWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGodWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
