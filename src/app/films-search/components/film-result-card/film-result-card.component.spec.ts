import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmResultCardComponent } from './film-result-card.component';

describe('FilmResultCardComponent', () => {
  let component: FilmResultCardComponent;
  let fixture: ComponentFixture<FilmResultCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmResultCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmResultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
