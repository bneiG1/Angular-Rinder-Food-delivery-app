import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Restaurant } from './restaurant';
import { Produs } from './produs';
import { Filter } from './filter';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  // GET- citeste din json
  // POST- adauga in json
  // PATCH- face update la un element dupa id din json
  // PUT si PATCH fac cam aceleasi lucruri
  // DELETE- sterge elementul dupa id din json
  constructor(private http: HttpClient) {}

  // JSON-SERVER
  //   apiUrl_users = 'http://localhost:5000/users';
  //   apiUrl_restaurants = 'http://localhost:5000/restaurants';



  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.apiUrl_users);
  // }

  // getUser(User_Id: number): Observable<User> {
  //   const user_url = `${this.apiUrl_users}/${User_Id }`;
  //   return this.http.get<User>(user_url);
  // }

  // getRestaurants(): Observable<Restaurant[]> {
  //   return this.http.get<Restaurant[]>(this.apiUrl_restaurants );
  // }

  // getRestaurant(Restaurant_Id: number): Observable<Restaurant> {
  //   const apiUrl_restaurants = `${this.apiUrl_restaurants}/${Restaurant_Id }`;
  //   return this.http.get<Restaurant>(apiUrl_restaurants);
  // }

  // updateUser(user: User): Observable<User>  {
  //   const user_url = `${this.apiUrl_users}/${user.id }`;
  //   return this.http.patch<User>(user_url, user, httpOptions);
  // }

  // updateCos(user: User, cos: Produs[]): Observable<User>  {
  //   const user_url = `${this.apiUrl_users}/${user.id}`;
  //   return this.http.patch<User>(user_url, cos, httpOptions);
  // }

  // updateComenzi(user: User, comenzi: Produs[]): Observable<User>  {
  //   const user_url = `${this.apiUrl_users}/${user.id}`;
  //   return this.http.patch<User>(user_url, comenzi, httpOptions);
  // }

  // FIREBASE DATABASE
  apiUrl_users = 'https://proiect-tw01-default-rtdb.europe-west1.firebasedatabase.app/users';
  apiUrl_filters = 'https://proiect-tw01-default-rtdb.europe-west1.firebasedatabase.app/filters';
  apiUrl_restaurants = 'https://proiect-tw01-default-rtdb.europe-west1.firebasedatabase.app/restaurants';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl_users + '.json');
  }
  getFilters(): Observable<Filter[]> {
    return this.http.get<Filter[]>(this.apiUrl_filters + '.json');
  }


  getUser(User_Id: number): Observable<User> {
    const user_url = `${this.apiUrl_users}/${User_Id + '.json'}`;
    return this.http.get<User>(user_url);
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.apiUrl_restaurants + '.json');
  }

  getRestaurant(Restaurant_Id: number): Observable<Restaurant> {
    const apiUrl_restaurants = `${this.apiUrl_restaurants}/${Restaurant_Id + '.json'}`;
    return this.http.get<Restaurant>(apiUrl_restaurants);
  }


  createUser(user: User): Observable<User>  {
    const user_url = `${this.apiUrl_users}/${user.id + '.json'}`;
    return this.http.patch<User>(user_url, user, httpOptions);
  }

  updateUser(user: User): Observable<User>  {
    const user_url = `${this.apiUrl_users}/${user.id + '.json'}`;
    return this.http.patch<User>(user_url, user, httpOptions);
  }

  updateCos(user: User, cos: Produs): Observable<User>    {
    const user_url = `${this.apiUrl_users}/${user.id + '/cos/' + cos.id + '.json'}`;
    return this.http.patch<User>(user_url, cos, httpOptions);
  }

  updateComenzi(user: User, comenzi: Produs): Observable<User>   {
    const user_url = `${this.apiUrl_users}/${user.id + '/comenzi/' + comenzi.id + '.json'}`;
    return this.http.patch<User>(user_url, comenzi, httpOptions);
  }

  deleteUser(user: User): Observable<User>    {
    const user_url = `${this.apiUrl_users}/${user.id + '/.json'}`;
    return this.http.delete<User>(user_url, httpOptions);
  }

  deleteCos(user: User): Observable<User>    {
    const user_url = `${this.apiUrl_users}/${user.id + '/cos.json'}`;
    return this.http.delete<User>(user_url, httpOptions);
  }

}
