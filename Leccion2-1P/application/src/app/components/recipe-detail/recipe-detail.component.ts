import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Recipe } from '../../interfaces/recipe.interface';
import { RecipeService } from '../../services/recipe';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mt-4" *ngIf="recipe">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="card">
            <img [src]="recipe.imagen" class="card-img-top" [alt]="recipe.nombre">
            <div class="card-body">
              <h2 class="card-title text-center mb-4">{{ recipe.nombre }}</h2>
              <div class="steps-container">
                <h4 class="mb-3">Pasos de Preparación</h4>
                <ol class="steps-list">
                  <li *ngFor="let paso of recipe.pasos" class="step-item">
                    {{ paso }}
                  </li>
                </ol>
              </div>
              <button class="btn btn-primary mt-4" routerLink="/">Volver a Recetas</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      margin-bottom: 2rem;
    }
    .card-img-top {
      height: 400px;
      object-fit: cover;
    }
    .steps-container {
      background-color: #f8f9fa;
      padding: 2rem;
      border-radius: 8px;
    }
    .steps-list {
      padding-left: 1.5rem;
    }
    .step-item {
      margin-bottom: 1rem;
      line-height: 1.6;
      color: #495057;
    }
    .btn-primary {
      width: 100%;
    }
  `]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | undefined;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    const recipeName = this.route.snapshot.paramMap.get('nombre');
    if (recipeName) {
      this.recipeService.getRecipes().subscribe(response => {
        this.recipe = response.recipes.find(r => r.nombre === recipeName);
      });
    }
  }
}