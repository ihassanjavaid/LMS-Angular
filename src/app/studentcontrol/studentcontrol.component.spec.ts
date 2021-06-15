import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcontrolComponent } from './studentcontrol.component';

describe('StudentcontrolComponent', () => {
  let component: StudentcontrolComponent;
  let fixture: ComponentFixture<StudentcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentcontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
