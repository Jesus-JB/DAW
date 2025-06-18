import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NasaItem } from '../interfaces/nasa.interface';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private readonly NASA_API_URL = 'https://images-api.nasa.gov/search?q=galaxy&media_type=image';

  constructor(private http: HttpClient) {}

  getGalaxyImages(): Observable<NasaItem[]> {
    return this.http.get<any>(this.NASA_API_URL).pipe(
      map(response => response.collection.items)
    );
  }
}