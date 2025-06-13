import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RecipeResponse } from '../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes = {
    recipes: [
      {
        nombre: "Tiramisú",
        pasos: [
          "Mezcla yemas con azúcar hasta obtener una mezcla cremosa.",
          "Añade queso mascarpone y mezcla bien.",
          "Bate crema o claras a punto de nieve e incorpora suavemente.",
          "Remoja bizcochos en café y colócalos como base.",
          "Alterna capas de crema y bizcochos.",
          "Refrigera al menos 4 horas.",
          "Espolvorea cacao justo antes de servir."
        ],
        imagen: "https://thesweetoccasion.com/wp-content/uploads/2023/12/Easy-Tiramisu-11.jpg"
      },
      {
        nombre: "Brownies de chocolate",
        pasos: [
          "Derrite chocolate con mantequilla a baño maría.",
          "Agrega azúcar y mezcla hasta disolver.",
          "Incorpora los huevos uno a uno mezclando bien.",
          "Añade harina tamizada y mezcla con suavidad.",
          "Vierte la mezcla en un molde engrasado.",
          "Hornea a 180 °C durante 25–30 min.",
          "Deja enfriar antes de cortar en porciones."
        ],
        imagen: "https://images.aws.nestle.recipes/original/2024_10_28T12_26_14_badun_images.badun.es_42c16b87405b_brownie_de_chocolate_con_leche.jpg"
      },
      {
        nombre: "Cheesecake de frutilla",
        pasos: [
          "Tritura galletas y mézclalas con mantequilla derretida.",
          "Presiona la base en un molde y refrigera.",
          "Bate queso crema con azúcar y esencia de vainilla.",
          "Agrega huevos uno a uno, mezclando bien.",
          "Vierte sobre la base y hornea a 160 °C por 50 min.",
          "Refrigera al menos 4 horas para cuajar.",
          "Antes de servir, cubre con mermelada de frutilla."
        ],
        imagen: "https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/7f9ebeaceea909a80306da27f0495c59.jpg"
      },
      {
        nombre: "Churros con chocolate",
        pasos: [
          "Hierve agua con mantequilla, azúcar y sal.",
          "Añade harina de un solo golpe y mezcla hasta formar una masa.",
          "Deja enfriar un poco, añade huevo y vainilla.",
          "Forma churros con manga pastelera sobre aceite caliente (unos 180 °C).",
          "Fríe hasta que estén dorados y crujientes.",
          "Escurre en papel y reboza en azúcar con canela.",
          "Sirve con salsa de chocolate para acompañar."
        ],
        imagen: "https://7diasdesabor.com/wp-content/uploads/2022/05/churros-con-salsa-de-chocolate.jpg"
      },
      {
        nombre: "Tarta de fresas",
        pasos: [
          "Prepara una base crujiente con masa quebrada y hornéala a ciega.",
          "Rellena con crema pastelera fría.",
          "Distribuye fresas frescas encima.",
          "Barniza las fresas con mermelada de albaricoque para brillo.",
          "Refrigera al menos 2 horas antes de servir."
        ],
        imagen: "https://comedera.com/wp-content/uploads/sites/9/2023/02/Tartaleta-de-fresa-shutterstock_1084608647.jpg"
      },
      {
        nombre: "Tarta de limón",
        pasos: [
          "Hornear una masa quebrada en molde para tarta hasta dorar.",
          "Mezcla huevos, crema, jugo y ralladura de limón.",
          "Vierte la mezcla sobre la masa y hornea a baño María a 160 °C por 30–35 min.",
          "Deja enfriar y refrigera al menos 3 horas.",
          "Decora con ralladura de limón o azúcar glas antes de servir."
        ],
        imagen: "https://images.aws.nestle.recipes/original/2024_10_18T11_18_16_badun_images.badun.es_ab713d48a93a_tarta_de_limon.jpg"
      }
    ]
  };

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<RecipeResponse> {
    return of(this.recipes);
  }
}
