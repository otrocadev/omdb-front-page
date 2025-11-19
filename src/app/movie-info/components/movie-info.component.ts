import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowMovieInfoService } from '../data-access/show-movie-info.service';
import { MovieInfoCardComponent } from './movie-info-card/movie-info-card.component';

@Component({
  selector: 'app-movie-info',
  imports: [MovieInfoCardComponent],
  templateUrl: './movie-info.component.html',
  styles: ``,
})
export class MovieInfoComponent {
  private _route = inject(ActivatedRoute);
  private _movieId = '';

  private _movieInfoService = inject(ShowMovieInfoService);
  movieInfo = this._movieInfoService.movieInfo;

  constructor() {
    this._route.params.subscribe(async (params) => {
      this._movieId = params['id'];
      this._movieInfoService.getMovieById(this._movieId);
      console.log(this._movieInfoService.movieInfo());
    });
  }
}
