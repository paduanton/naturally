import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { IUserLogin } from '../../types/user.types';
import { UserService } from '../user/user.service';

const API_URL = 'https://reqres.in/api/login?delay=1';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}


  authenticate(user: IUserLogin) {

    const params = {
      email: user.username,
      password: user.password
    };

    return this.http
      .post(API_URL, params, {
        observe: 'response'
      })
      .pipe(tap(res => {
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1ODE3MDU2MzEsImV4cCI6MTYxMzI0MTYzMSwiYXVkIjoiIiwic3ViIjoiYm90bWFydmluQGJvdC5jb20iLCJuYW1lIjoiTWFydmluIiwiZW1haWwiOiJib3RtYXJ2aW5AYm90LmNvbSIsImlkIjoiNDIifQ.WPxO6J44YnSfpS5wS755-nQS60cSvi8cj8CvFpfttMk';
        console.log('res', res);
        this.userService.setToken(token);
      }));
  }

  forgotPassword(email: string) {

    /**
     * Mock
     * Esté mock sera removido posteriormente,
     * pois será passado apenas o email para o backend
     */
    const mockData = {
      email,
      password: 'aaa'
    };

    return this.http
      .post(API_URL, mockData, {
        observe: 'response'
      });
  }

  changePassword(password) {

    /**
     * Mock
     * Esté mock sera removido posteriormente,
     * pois será passado apenas o email para o backend
     */
    const mockData = {
      email: 'eve.holt@reqres.in',
      password: 'aaa'
    };

    return this.http
      .post(API_URL, mockData, {
        observe: 'response'
      });
  }
}
