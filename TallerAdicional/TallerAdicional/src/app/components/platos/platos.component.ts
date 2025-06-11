import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsService } from '../../services/meals.service';
import { Meal } from '../../interfaces/meal';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.css'
})
export class PlatosComponent implements OnInit {
  meals: Meal[] = [];
  searchTerm: string = '';
  loading: boolean = false;
  error: string | null = null;

  constructor(private mealsService: MealsService) { }

  ngOnInit(): void {
    this.searchMeals();
  }

  searchMeals(): void {
    this.loading = true;
    this.error = null;
    
    this.mealsService.searchMeals(this.searchTerm).subscribe({
      next: (response) => {
        this.meals = response.meals || [];
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los platos. Por favor, intente nuevamente.';
        this.loading = false;
        console.error('Error fetching meals:', err);
      }
    });
  }
}
