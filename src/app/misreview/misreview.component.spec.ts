import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisreviewComponent } from './misreview.component';

describe('MisreviewComponent', () => {
  let component: MisreviewComponent;
  let fixture: ComponentFixture<MisreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisreviewComponent]
    });
    fixture = TestBed.createComponent(MisreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
