import { TestBed } from '@angular/core/testing';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { authGuard } from './auth.guard';

describe('authGuard', () => {
  let executeGuard: CanActivateFn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    executeGuard = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should return true if token exists in localStorage', () => {
    // Arrange
    spyOn(localStorage, 'getItem').and.returnValue('someToken');
    const activatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const routerStateSnapshot = {} as RouterStateSnapshot;

    // Act
    const result = executeGuard(activatedRouteSnapshot, routerStateSnapshot);

    // Assert
    expect(result).toBeTrue();
  });

  it('should return false if token does not exist in localStorage', () => {
    // Arrange
    spyOn(localStorage, 'getItem').and.returnValue(null);
    const activatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const routerStateSnapshot = {} as RouterStateSnapshot;

    // Act
    const result = executeGuard(activatedRouteSnapshot, routerStateSnapshot);

    // Assert
    expect(result).toBeFalse();
  });

  it('should show alert with "ter" if token exists', () => {
    // Arrange
    spyOn(localStorage, 'getItem').and.returnValue('someToken');
    spyOn(window, 'alert');
    const activatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const routerStateSnapshot = {} as RouterStateSnapshot;

    // Act
    executeGuard(activatedRouteSnapshot, routerStateSnapshot);

    // Assert
    expect(window.alert).toHaveBeenCalledWith('ter');
  });

  it('newly added', () => {
    // Arrange
    spyOn(localStorage, 'getItem').and.returnValue(null);
    spyOn(window, 'alert');
    const activatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const routerStateSnapshot = {} as RouterStateSnapshot;

    // Act
    executeGuard(activatedRouteSnapshot, routerStateSnapshot);

    //   treertrt
    expect(window.alert).toHaveBeenCalledWith('not logged');
  });

  it('should show alert with "not logged" if token does not exist', () => {
    console.log('added console');
    spyOn(localStorage, 'getItem').and.returnValue(null);
    spyOn(window, 'alert');
    const activatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const routerStateSnapshot = {} as RouterStateSnapshot;

    // Act
    executeGuard(activatedRouteSnapshot, routerStateSnapshot);

    // Assert
    expect(window.alert).toHaveBeenCalledWith('not logged');
  });
});
