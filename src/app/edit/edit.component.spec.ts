import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditComponent } from './edit.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('EditComponent', () => {

  let component: EditComponent;
  
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditComponent],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    expect(component.form.value).toEqual({
      userType: '',
      username: '',
      password: ''
    });
  });

  it('should mark the form as submitted when onSubmit is called', () => {
    expect(component.submitted).toBeFalsy();
    //component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  // Add more test cases as needed to cover other component behavior
});
