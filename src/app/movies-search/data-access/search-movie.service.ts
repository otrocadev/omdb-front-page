import { Injectable, inject, signal } from '@angular/core';
import { OMDBService } from '../../shared/data-access/omdb.service';
import type { SearchResult } from '../types/movieResultsType';

@Injectable({
  providedIn: 'root',
})
export class SearchMovieService {
  private _omdbService = inject(OMDBService);
  private _searchInput = signal('');
  private _moviesList = signal<SearchResult[]>([]);

  searchInput = this._searchInput.asReadonly();
  moviesList = this._moviesList.asReadonly();

  updateSearchInput(input: string) {
    this._searchInput.set(input);
    console.log('The search input is now:', this._searchInput());
  }

  manageMovieListData(response: any): SearchResult[] {
    // data validation TODO here
    console.log(response.Search);

    const transformedList = response.Search.map((movie: any) => ({
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
    }));

    return transformedList;
  }

  searchMovies(input: string) {
    this.updateSearchInput(input);
    this._omdbService.fetchMovies(input).subscribe((response) => {
      const processedData = this.manageMovieListData(response);
      this._moviesList.set(processedData);
    });
  }
}
