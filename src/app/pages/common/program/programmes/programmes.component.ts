import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-programmes',
  imports: [],
  templateUrl: './programmes.component.html',
  styleUrl: './programmes.component.scss',
})
export class ProgrammesComponent {
  slides = [
    {
      title: 'Startup Nexus',
      description:
        'The program includes nine The program includes nine weeks of intensive training designed to equip startups with essential business and entrepreneurial skills. The training covers key areas such as market research, value proposition development, financial management, business strategy, and operational planning. Participants gain practical insights through structured mentoring sessions, expert-led workshops, and real-world case studies Startups also benefit from interactions with leading American and Indian industry experts, enabling them to build strong business foundations.',
    },
    {
      title: 'Spark incubation center',
      description:
        'SPARK incubates early-stage manufacturing/technology start-ups that demonstrate the ability to innovate, create new products and services to solve real-world problems. The incubation Programme involves Training, Mentoring, Protot...-driven accelerator with investor connects and startup scaling support.',
    },
    {
      title: 'NIIC NISHANK Incubation Program..',
      description:
        'Fast-track growth Mentoring support, 3 months accelerator program, accounting & legal support to their incubators. focused on funding, expansion, and expert guidance.',
    },
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
