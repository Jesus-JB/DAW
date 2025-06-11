import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-restaurante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-restaurante.component.html',
  styleUrl: './info-restaurante.component.css'
})
export class InfoRestauranteComponent {
  restaurantInfo = {
    name: 'Delicias Culinarias',
    description: 'Somos un restaurante especializado en la preparación de platos internacionales con ingredientes frescos y de alta calidad. Nuestra misión es ofrecer una experiencia gastronómica única que deleite todos los sentidos.',
    history: 'Fundado en 2010, nuestro restaurante ha crecido hasta convertirse en un referente de la gastronomía local. Comenzamos como un pequeño local familiar y hoy contamos con un equipo de chefs profesionales dedicados a crear experiencias culinarias memorables.',
    specialties: [
      'Cocina internacional',
      'Platos gourmet',
      'Postres artesanales',
      'Cócteles exclusivos'
    ],
    hours: {
      weekdays: '12:00 - 22:00',
      weekends: '13:00 - 23:30'
    }
  };
}
