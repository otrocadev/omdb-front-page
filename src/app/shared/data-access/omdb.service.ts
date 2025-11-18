import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import type { SearchResult } from '../../movies-search/types/movieResultsType';

@Injectable({
  providedIn: 'root',
})
export class OMDBService {
  private _OMDB_API_URL = environment.OMDB_API_URL;
  private _OMDB_API_KEY = environment.OMDB_API_KEY;

  constructor(private http: HttpClient) {}

  fetchMovies(searchInput: string) {
    const params = new HttpParams({
      fromObject: {
        apikey: this._OMDB_API_KEY,
        s: searchInput,
      },
    });
    return this.http.get(this._OMDB_API_URL, { params });
  }
}
