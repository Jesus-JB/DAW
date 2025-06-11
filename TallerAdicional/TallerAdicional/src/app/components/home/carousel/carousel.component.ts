import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  slides = [
    { image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836', title: 'Platos Exquisitos', description: 'Descubre nuestra variedad de platos internacionales' },
    { image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1', title: 'Ingredientes Frescos', description: 'Utilizamos solo ingredientes de la más alta calidad' },
    { image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4', title: 'Ambiente Acogedor', description: 'Disfruta de una experiencia gastronómica única' }
  ];

  activeSlideIndex = 0;

  constructor() { }

  ngOnInit(): void {
    // Iniciar el carrusel automático
    this.startCarousel();
  }

  startCarousel(): void {
    setInterval(() => {
      this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
    }, 5000);
  }

  setActiveSlide(index: number): void {
    this.activeSlideIndex = index;
  }
}
