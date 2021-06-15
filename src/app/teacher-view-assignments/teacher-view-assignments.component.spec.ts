import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewAssignmentsComponent } from './teacher-view-assignments.component';

describe('TeacherViewAssignmentsComponent', () => {
  let component: TeacherViewAssignmentsComponent;
  let fixture: ComponentFixture<TeacherViewAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherViewAssignmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherViewAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
