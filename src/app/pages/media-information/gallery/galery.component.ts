import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photos',
  standalone: true, // remove if not using standalone
  imports: [CommonModule], // required for *ngFor
  templateUrl: './galery.component.html',
})
export class GaleryComponent {
  // 👉 TOTAL number of photo cards in HTML
  totalItems = 12;

  // 👉 2 rows × 3 columns
  itemsPerPage = 6;

  currentPage = 1;

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return this.startIndex + this.itemsPerPage;
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
