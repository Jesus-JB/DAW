import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Recipe } from '../../interfaces/recipe.interface';
import { RecipeService } from '../../services/recipe';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mt-4">
      <div class="row">
        <div *ngFor="let recipe of recipes" class="col-md-4 mb-4">
          <div class="card h-100">
            <img [src]="recipe.imagen" class="card-img-top" [alt]="recipe.nombre" style="height: 200px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">{{ recipe.nombre }}</h5>
              <button class="btn btn-primary" [routerLink]="['/recipe', recipe.nombre]">
                Ver Receta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .btn-primary {
      width: 100%;
      margin-top: 1rem;
    }
  `]
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(response => {
      this.recipes = response.recipes;
      console.log('Recipes loaded:', this.recipes);
    });
  }
}
