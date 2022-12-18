import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUser(): Observable<User> {
    return this.httpClient.get<User>('https://reqres.in/api/users?page=1');
  }
}
