import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasscontrolComponent } from './classcontrol.component';

describe('ClasscontrolComponent', () => {
  let component: ClasscontrolComponent;
  let fixture: ComponentFixture<ClasscontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasscontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasscontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
