import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DonationsComponent } from './donations/donations.component';
import { ToursComponent } from './tours/tours.component';
import { ImpactComponent } from './impact/impact.component';
import { SloganComponent } from './slogan/slogan.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { ContentManagementComponent } from './admin/content-management/content-management.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'donations', component: DonationsComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'impact', component: ImpactComponent },
  { path: 'slogan', component: SloganComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/users', component: UserManagementComponent },
  { path: 'admin/content', component: ContentManagementComponent },
  { path: '**', redirectTo: 'admin/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
