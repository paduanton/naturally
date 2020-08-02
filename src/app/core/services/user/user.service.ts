import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';
import * as jwt_decode from 'jwt-decode';
import { IUser } from '../../types/user.types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<any>(null);
  private username: string;

  constructor(private tokenService: TokenService) { }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as IUser;
    this.username = user.name;
    this.userSubject.next(user);
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return  this.userSubject.asObservable();
  }

  getUsername() {
    return this.username;
  }
}
