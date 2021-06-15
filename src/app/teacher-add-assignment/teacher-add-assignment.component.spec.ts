import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAddAssignmentComponent } from './teacher-add-assignment.component';

describe('TeacherAddAssignmentComponent', () => {
  let component: TeacherAddAssignmentComponent;
  let fixture: ComponentFixture<TeacherAddAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherAddAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAddAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
