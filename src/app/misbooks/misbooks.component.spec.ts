import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisbooksComponent } from './misbooks.component';

describe('MisbooksComponent', () => {
  let component: MisbooksComponent;
  let fixture: ComponentFixture<MisbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisbooksComponent]
    });
    fixture = TestBed.createComponent(MisbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
