export interface Recipe {
  nombre: string;
  pasos: string[];
  imagen: string;
}

export interface RecipeResponse {
  recipes: Recipe[];
}
