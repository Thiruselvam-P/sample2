import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, AfterViewInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      /* ================= CAROUSEL (EXISTING) ================= */
      const carouselEl = document.getElementById('mainCarousel');

      if (carouselEl) {
        new bootstrap.Carousel(carouselEl, {
          interval: 3000,
          ride: 'carousel',
          pause: false,
          wrap: true,
        });
      }

      /* ================= COUNT UP ON SCROLL (NEW) ================= */
      const counters =
        document.querySelectorAll<HTMLElement>('h3[data-target]');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateCounter(entry.target as HTMLElement);
              observer.unobserve(entry.target); // run once
            }
          });
        },
        { threshold: 0.4 },
      );

      counters.forEach((counter) => observer.observe(counter));
    }
  }

  /* ================= COUNT FUNCTION ================= */
  private animateCounter(el: HTMLElement): void {
    const target = Number(el.getAttribute('data-target'));
    let current = 0;

    const increment = Math.ceil(target / 100);

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        el.innerText = this.formatNumber(target);
        clearInterval(timer);
      } else {
        el.innerText = this.formatNumber(current);
      }
    }, 20);
  }

  /* ================= FORMAT NUMBER ================= */
  private formatNumber(num: number): string {
    if (num >= 1000) {
      return Math.floor(num / 1000) + 'K+';
    }
    return num.toString();
  }
}
