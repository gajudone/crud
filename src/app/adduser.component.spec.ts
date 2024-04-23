import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { AdduserComponent } from './adduser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('AdduserComponent', () => {
  let component: AdduserComponent;
  let fixture: ComponentFixture<AdduserComponent>;
  let router: Router;
  let http: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduserComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1'
              }
            }
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    http = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify(); // Ensure no outstanding requests
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.loading).toBe(false);
  });

  it('should initialize the form with default values', () => {
    expect(component.form.value).toEqual({
      userType: 'Guest',
      username: '',
      password: ''
    });
  });

  it('should submit form data and navigate to login', fakeAsync(() => {
    spyOn(http, 'post').and.returnValue(of({})); // Mock HTTP post method
    spyOn(router, 'navigate'); // Spy on router navigate method

    const formValue = {
      userType: 'Admin',
      username: 'testuser',
      password: 'testpassword'
    };

    component.form.setValue(formValue); // Set form value
    component.onSubmit(formValue); // Call onSubmit method

    // Expect HTTP post method to be called with correct arguments
    expect(http.post).toHaveBeenCalledWith('http://localhost:3000/posts', formValue);

    // Expect router navigate method to be called with correct argument
    expect(router.navigate).toHaveBeenCalledWith(['login']);

    // Expect loading to be false after form submission
    expect(component.loading).toBe(true);

    // Expect submitted flag to be true after form submission
    expect(component.submitted).toBe(true);
  }));
});
