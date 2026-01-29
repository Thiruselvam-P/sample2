import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-topbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  fontSize = 16;
  minFontSize = 2;
  maxFontSize = 28;

  increaseFont() {
    if (this.fontSize < this.maxFontSize) {
      this.fontSize++;
      this.applyFontSize();
    }
  }

  decreaseFont() {
    if (this.fontSize > this.minFontSize) {
      this.fontSize--;
      this.applyFontSize();
    }
  }

  resetFont() {
    this.fontSize = 16;
    this.applyFontSize();
  }

  applyFontSize() {
    document.documentElement.style.fontSize = `${this.fontSize}px`;
  }
}

