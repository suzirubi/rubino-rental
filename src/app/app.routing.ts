import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { AdminComponent } from './admin/admin.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';




const appRoutes: Routes = [
  {
    path: '',
    component: RentalListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'rentals/:id',
    component: RentalDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'expenses',
    component: ExpenseListComponent
  },
  {
    path: 'expenses/:id',
    component: ExpenseDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
