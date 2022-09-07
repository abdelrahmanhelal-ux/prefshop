import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddProductsComponent } from '../admin-add-products/admin-add-products.component';
import { AdminDelateProductsComponent } from '../admin-delate-products/admin-delate-products.component';
import { AdminEditProductsComponent } from '../admin-edit-products/admin-edit-products.component';
import { AdminProductsComponent } from './admin-products.component';

const routes: Routes = [
  {
    path: '',
    component: AdminProductsComponent
  },
  {
    path: 'add',
    component: AdminAddProductsComponent
  },
  {
    path: 'edit',
    component: AdminEditProductsComponent
  },
  {
    path: 'delate',
    component: AdminDelateProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminProductsRoutingModule { }
