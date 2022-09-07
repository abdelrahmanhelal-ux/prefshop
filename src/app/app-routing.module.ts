import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { UserComponent } from './layouts/user/user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./user/home/home-routing.module').then(m => m.HomeRoutingModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./user/product/product-routing.module').then(m => m.ProductRoutingModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./user/login/login-routing.module').then(m => m.LoginRoutingModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('./user/signup/signup-routing.module').then(m => m.SignupRoutingModule)
      },
    ],
  },
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'

      },
      {
        path: 'dashboard',
        loadChildren: () => import('./admin/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule)
      },
      {
        path: 'sales',
        loadChildren: () => import('./admin/sales/sales-routing.module').then(m => m.SalesRoutingModule)
      },
      {
        path: 'slides',
        loadChildren: () => import('./admin/slide/admin-slides/admin-slides-routing.module').then(m => m.AdminSlidesRoutingModule)
      },

      {
        path: 'products',
        loadChildren: () => import('./admin/products/admin-products/admin-products-routing.module').then(m => m.AdminProductsRoutingModule)
      },
    ],
  },
  {
    path: 'loginadmin',
    children: [
      {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'

      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin-login/admin-login-routing.module').then(m => m.AdminLoginRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
