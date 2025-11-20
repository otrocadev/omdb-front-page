import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInfoCardComponent } from './movie-info-card.component';

describe('MovieInfoCardComponent', () => {
  let component: MovieInfoCardComponent;
  let fixture: ComponentFixture<MovieInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieInfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
