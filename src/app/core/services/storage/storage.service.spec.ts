import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(StorageService);

    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save data to localStorage', () => {
    service.save('token', 'sometoken');
    expect(service.get('token')).toEqual('sometoken');
  });

  it('should get data from localStorage', () => {
    service.save('data', 'somedata');
    const data = service.get('data');

    expect(data).not.toBe(null);
  });

  it('should remove data from localStorage', () => {
    service.save('data', 'somedata');
    service.remove('data');
    expect(service.get('data')).toBe(null);
  });

  it('should return null when item do not exist', () => {
    expect(service.get('data')).toBe(null);
  });
});
