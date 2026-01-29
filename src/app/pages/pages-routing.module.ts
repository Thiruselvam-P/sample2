import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { TenderNotificationComponent } from './media-information/tender-notification/tender-notification.component';
import { SchemesComponent } from './common/schemes/schemes-upd/schemes.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
