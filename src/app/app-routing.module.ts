import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/admin-pages/dashboard/dashboard.component';
import { ClientLayoutComponent } from './client/client-layout/client-layout.component';
import { HomeComponent } from './client/client-pages/home/home.component';

const routes: Routes = [
  {
    path: "admin", component: AdminLayoutComponent, children: [
      { path: "", component: DashboardComponent },
      //{ path: "customers", loadChildren: () => import("./admin/components/customer/customer.module").then(module => module.CustomerModule), canActivate: [AuthGuard] },
    ]
  },
  {
    path: "", component: ClientLayoutComponent, children: [
      { path: "", component: HomeComponent },
      //{ path: "customers", loadChildren: () => import("./admin/components/customer/customer.module").then(module => module.CustomerModule), canActivate: [AuthGuard] },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
