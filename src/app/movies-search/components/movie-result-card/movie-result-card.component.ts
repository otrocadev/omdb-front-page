import { Component, computed, input } from '@angular/core';
import { SearchResult } from '../../../shared/types/movieTypes';
import { onImageError } from '../../../shared/utils';

@Component({
  selector: 'app-movie-result-card',
  imports: [],
  templateUrl: './movie-result-card.component.html',
})
export class MovieResultCardComponent {
  movie = input<SearchResult>();

  title = computed(() => this.movie()?.title || 'Unknown Title');
  year = computed(() => this.movie()?.year || 'Unknown Year');
  poster = computed(() => this.movie()?.poster || '');
  movieId = computed(() => this.movie()?.imdbID || '');

  onImageError = onImageError;
}
