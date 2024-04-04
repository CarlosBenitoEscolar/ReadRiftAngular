import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBooksComponent } from './lista-books.component';

describe('ListaBooksComponent', () => {
  let component: ListaBooksComponent;
  let fixture: ComponentFixture<ListaBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaBooksComponent]
    });
    fixture = TestBed.createComponent(ListaBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
