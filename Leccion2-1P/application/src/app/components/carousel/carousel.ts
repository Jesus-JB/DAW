import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div class="container my-4">
      <div id="mainCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="assets/images/slide1.jpg" class="d-block w-100" alt="Deliciosos postres">
            <div class="carousel-caption d-none d-md-block">
              <h2>Postres Artesanales</h2>
              <p>Descubre nuestras deliciosas recetas caseras</p>
              <a routerLink="/recipes" class="btn btn-primary">Ver Nuestras Recetas</a>
            </div>
          </div>
          <div class="carousel-item">
            <img src="assets/images/slide2.jpg" class="d-block w-100" alt="Ingredientes frescos">
            <div class="carousel-caption d-none d-md-block">
              <h2>Ingredientes Selectos</h2>
              <p>Utilizamos los mejores ingredientes para nuestras recetas</p>
              <a routerLink="/recipes" class="btn btn-primary">Ver Nuestras Recetas</a>
            </div>
          </div>
          <div class="carousel-item">
            <img src="assets/images/slide3.jpg" class="d-block w-100" alt="Proceso de elaboración">
            <div class="carousel-caption d-none d-md-block">
              <h2>Elaboración Cuidadosa</h2>
              <p>Cada postre es preparado con dedicación y amor</p>
              <a routerLink="/recipes" class="btn btn-primary">Ver Nuestras Recetas</a>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .carousel-item {
      height: 500px;
    }
    .carousel-item img {
      object-fit: cover;
      height: 100%;
    }
    .carousel-caption {
      background: rgba(0, 0, 0, 0.5);
      padding: 20px;
      border-radius: 10px;
    }
    .btn-primary {
      margin-top: 10px;
    }
  `]
})
export class CarouselComponent implements OnInit {
  ngOnInit(): void {
  }
}
