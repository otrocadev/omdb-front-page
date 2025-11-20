import { Injectable, inject, signal } from '@angular/core';
import { OMDBService } from '../../shared/data-access/omdb.service';
import type { Movie } from '../../shared/types/movieTypes';

@Injectable({
  providedIn: 'root',
})
export class ShowMovieInfoService {
  private _omdbService = inject(OMDBService);
  private _movieInfo = signal<Movie | null>(null);
  private _errorMessage = signal<string | null>(null);
  private _isLoading = signal(false);

  movieInfo = this._movieInfo.asReadonly();
  errorMessage = this._errorMessage.asReadonly();
  isLoading = this._isLoading.asReadonly();

  manageMovieListData(response: any): Movie {
    const movie: Movie = {
      title: response.Title,
      poster: response.Poster,
      rated: response.Rated,
      released: response.Released,
      runtime: response.Runtime,
      genre: response.Genre,
      director: response.Director,
      writer: response.Writer,
      actors: response.Actors,
      plot: response.Plot,
      language: response.Language,
      country: response.Country,
      awards: response.Awards,
      ratings: response.Ratings,
      metascore: response.Metascore,
      imdbRating: response.imdbRating,
      imdbVotes: response.imdbVotes,
      imdbID: response.imdbID,
      type: response.Type,
      dvd: response.DVD,
      boxOffice: response.BoxOffice,
      production: response.Production,
      website: response.Website,
      response: response.Response,
    };
    return movie;
  }

  getMovieById(id: string) {
    this._errorMessage.set(null);
    this._isLoading.set(true);

    this._omdbService.fetchMovieById(id).subscribe({
      next: (response) => {
        const processedData = this.manageMovieListData(response);
        this._movieInfo.set(processedData);
        this._isLoading.set(false);
      },
      error: (error) => {
        console.error('HTTP Error:', error);
        this._movieInfo.set(null);
        this._isLoading.set(false);
      },
    });
  }
}
