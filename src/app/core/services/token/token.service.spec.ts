import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';
import { StorageService } from '../storage/storage.service';

describe('TokenService', () => {
  let tokenService: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });

    tokenService = TestBed.get(TokenService);
  });

  it('should be created', () => {
    expect(tokenService).toBeTruthy();
  });

  it('should be set token', () => {
    tokenService.setToken('test-token');
    expect(tokenService.getToken()).toEqual('test-token');
  });

  it('should has token', () => {
    tokenService.setToken('test-token');
    expect(tokenService.hasToken()).toBe(true);
  });

  it('should remove token', () => {
    tokenService.setToken('test-token');
    tokenService.removeToken();
    expect(tokenService.hasToken()).toBe(false);
  });
});
