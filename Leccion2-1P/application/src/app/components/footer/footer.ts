import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-dark text-light py-4 mt-auto">
      <div class="container text-center">
        <p class="mb-1">Desarrollado por: Jesus Jimenez</p>
        <p class="mb-0">© {{ currentYear }} - Todos los derechos reservados | UEES 2025 | Desarrollo de Aplicaciones Web</p>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
