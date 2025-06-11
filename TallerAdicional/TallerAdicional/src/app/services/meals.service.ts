import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MealResponse } from '../interfaces/meal';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  searchMeals(term: string = ''): Observable<MealResponse> {
    return this.http.get<MealResponse>(`${this.apiUrl}/search.php?s=${term}`);
  }

  getMealById(id: string): Observable<MealResponse> {
    return this.http.get<MealResponse>(`${this.apiUrl}/lookup.php?i=${id}`);
  }

  getRandomMeal(): Observable<MealResponse> {
    return this.http.get<MealResponse>(`${this.apiUrl}/random.php`);
  }
}
