import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewAssignmentsComponent } from './student-view-assignments.component';

describe('StudentViewAssignmentsComponent', () => {
  let component: StudentViewAssignmentsComponent;
  let fixture: ComponentFixture<StudentViewAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentViewAssignmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
