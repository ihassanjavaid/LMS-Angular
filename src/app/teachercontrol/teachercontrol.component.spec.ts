import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachercontrolComponent } from './teachercontrol.component';

describe('TeachercontrolComponent', () => {
  let component: TeachercontrolComponent;
  let fixture: ComponentFixture<TeachercontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachercontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachercontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
