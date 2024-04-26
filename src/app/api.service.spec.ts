import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;
  let routerSpy: jasmine.SpyObj<Router>;
  let http: HttpClient;
  let router: Router;

  beforeEach(() => {
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule
      providers: [
        ApiService,
        { provide: Router, useValue: routerSpyObj }
      ]
    });

    service = TestBed.inject(ApiService);
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    http = TestBed.inject(HttpClient); // Inject HttpClient
    router = TestBed.inject(Router);
  });

  it('should inject HttpClient', () => {
    console.log('from master');
    console.log('from expresschanges');
    expect(service.http).toBeDefined();
  });

  it('should inject Router', () => {
    expect(service.router).toBeDefined();
  });

   it('should inject Router', () => {
    expect(service.router).toBeDefined();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should navigate to login', () => {
    service.useHttp();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['login']);
  });
});
