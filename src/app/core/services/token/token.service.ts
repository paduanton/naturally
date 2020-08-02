import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

const KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private storageService: StorageService) {}

  hasToken() {
    return !! this.getToken();
  }

  setToken(token: string) {
    this.storageService.save(KEY, token);
  }

  getToken() {
    return this.storageService.get(KEY);
  }

  removeToken() {
    this.storageService.remove(KEY);
  }
}
