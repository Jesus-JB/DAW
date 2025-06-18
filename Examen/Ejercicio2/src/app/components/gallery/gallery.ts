import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaService } from '../../services/nasa.service';
import { NasaItem } from '../../interfaces/nasa.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css'],
  standalone: true,
  imports: [CommonModule]
})
export class GalleryComponent implements OnInit {
  nasaItems: NasaItem[] = [];
  loading = false;
  error: string | null = null;

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.loadGalaxyImages();
  }

  loadGalaxyImages(): void {
    this.loading = true;
    this.error = null;
    this.nasaService.getGalaxyImages().subscribe({
      next: (data: NasaItem[]) => {
        this.nasaItems = data;
        this.loading = false;
      },
      error: (err: Error) => {
        this.error = 'Error loading NASA images. Please try again later.';
        this.loading = false;
        console.error('Error:', err);
      }
    });
  }

  showImages(item: NasaItem): void {
    console.log('Showing images for:', item.data[0].title);
  }
}
