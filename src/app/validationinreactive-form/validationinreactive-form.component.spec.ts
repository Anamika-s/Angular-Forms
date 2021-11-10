import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationinreactiveFormComponent } from './validationinreactive-form.component';

describe('ValidationinreactiveFormComponent', () => {
  let component: ValidationinreactiveFormComponent;
  let fixture: ComponentFixture<ValidationinreactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationinreactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationinreactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
