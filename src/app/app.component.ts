import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'sample2';

  // Arrow visibility
  showScrollTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {

    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop || 0;

    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Distance from bottom (px)
    const offsetFromBottom = 150;

    // Show arrow ONLY near footer
    this.showScrollTop =
      scrollTop + windowHeight >= documentHeight - offsetFromBottom;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
