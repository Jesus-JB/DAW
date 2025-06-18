import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NasaResponse } from '../interfaces/nasa.interface';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = 'https://images-api.nasa.gov/search';

  constructor(private http: HttpClient) { }

  getGalaxyImages(): Observable<NasaResponse> {
    return this.http.get<NasaResponse>(`${this.apiUrl}?q=galaxy&media_type=image`);
  }
}
