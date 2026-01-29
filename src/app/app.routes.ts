import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/common/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'tender-notifications',
        loadComponent: () =>
          import(
            './pages/media-information/tender-notification/tender-notification.component'
          ).then((m) => m.TenderNotificationComponent),
      },
      {
        path: 'schemes',
        loadComponent: () =>
          import('./pages/common/schemes/schemes-upd/schemes.component').then(
            (m) => m.SchemesComponent
          ),
      },
      {
        path: 'program',
        loadComponent: () =>
          import('./pages/common/program/programmes/programmes.component').then(
            (m) => m.ProgrammesComponent
          ),
      },
      {
        path: 'gallery',
        loadComponent: () =>
          import('./pages/media-information/gallery/galery.component').then(
            (m) => m.GaleryComponent
          ),
      },
      {
        path: 'events',
        loadComponent: () =>
          import('./pages/media-information/events/events.component').then(
            (m) => m.EventsComponent
          ),
      },
      {
        path:'contact-us',
        loadComponent: () =>
          import('./pages/common/contact/contact-us/contact-us.component').then(
            (m) => m.ContactUsComponent
          ),
      },
      {
        path:'news-letter',
        loadComponent: () =>
          import('./pages/common/documents/news-letter/news-letter.component').then(
            (m) => m.NewsLetterComponent
          ),
      },
    ],
  },
];
