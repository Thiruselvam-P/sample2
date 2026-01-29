import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent implements OnInit, OnDestroy {
  // 🔹 SET YOUR EVENT DATE & TIME HERE
  eventDate: string = '2026-06-23T10:00:00';

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private timer: any;

  ngOnInit(): void {
    this.calculateTime();
    this.timer = setInterval(() => {
      this.calculateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private calculateTime(): void {
    const targetTime = new Date(this.eventDate).getTime();
    const currentTime = new Date().getTime();
    const diff = Math.max(0, targetTime - currentTime);

    this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    this.minutes = Math.floor((diff / (1000 * 60)) % 60);
    this.seconds = Math.floor((diff / 1000) % 60);
  }
}
