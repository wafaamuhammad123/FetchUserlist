import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://reqres.in/api/users';
  private usersCache: { [key: number]: any } = {};
  private userDetailCache: { [key: number]: any } = {};

  constructor(private http: HttpClient) { }

  getUsers(page: number): Observable<any> {
    // Check if data is already in the cache
    if (this.usersCache[page]) {
      console.log(`Fetching users for page ${page} from cache`);
      return of(this.usersCache[page]);
    }

    console.log(`Fetching users for page ${page} from network`);
    return this.http.get<any>(`${this.baseUrl}?page=${page}`).pipe(
      tap(response => {
        console.log(`Caching users for page ${page}`);
        this.usersCache[page] = response;
      }),
      catchError(error => {
        console.error('Error fetching users:', error);
        throw error;
      })
      ,delay(1000)
    );
  }

  getUserById(userId: number): Observable<any> {
    // Check if data is already in the cache
    if (this.userDetailCache[userId]) {
      console.log(`Fetching user details for user ID ${userId} from cache`);
      return of(this.userDetailCache[userId]);
    }

    console.log(`Fetching user details for user ID ${userId} from network`);
    return this.http.get<any>(`${this.baseUrl}/${userId}`).pipe(
      map(response => response.data),
      tap(user => {
        console.log(`Caching user details for user ID ${userId}`);
        this.userDetailCache[userId] = user;
      }),
      
      catchError(error => {
        console.error(`Error fetching user details for user ID ${userId}:`, error);
        throw error;
      }), 
      delay(1000)// to test spinner
    );
  }

  clearCache(): void {
    this.usersCache = {};
    this.userDetailCache = {};
  }
}
