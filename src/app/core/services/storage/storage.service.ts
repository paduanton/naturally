import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  save(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  get(key: string) {
    return window.localStorage.getItem(key);
  }

  exists(key: string) {
    return !! this.get(key);
  }

  remove(key: string) {
    window.localStorage.removeItem(key);
  }
}
