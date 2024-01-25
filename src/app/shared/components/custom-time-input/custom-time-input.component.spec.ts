import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTimeInputComponent } from './custom-time-input.component';

describe('CustomTimeInputComponent', () => {
  let component: CustomTimeInputComponent;
  let fixture: ComponentFixture<CustomTimeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTimeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTimeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
