// src/app/user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers(page: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?page=${page}`);
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${userId}`).pipe(
      map(response => response.data)
    );
  }
}
