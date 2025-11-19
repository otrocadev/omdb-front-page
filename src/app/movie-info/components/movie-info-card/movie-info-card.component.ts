import { Component, input } from '@angular/core';
import { Movie } from '../../../shared/types/movieTypes';

@Component({
  selector: 'app-movie-info-card',
  imports: [],
  templateUrl: './movie-info-card.component.html',
  styles: ``,
})
export class MovieInfoCardComponent {
  movieInfo = input<Movie | null>(null);
}
