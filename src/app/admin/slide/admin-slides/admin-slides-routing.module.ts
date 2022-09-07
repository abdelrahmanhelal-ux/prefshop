import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddSlidesComponent } from '../admin-add-slides/admin-add-slides.component';
import { AdminDelateSlidesComponent } from '../admin-delate-slides/admin-delate-slides.component';
import { AdminEditSlidesComponent } from '../admin-edit-slides/admin-edit-slides.component';
import { AdminSlidesComponent } from './admin-slides.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSlidesComponent
  },
  {
    path: 'addslide',
    component: AdminAddSlidesComponent
  },
  {
    path: 'editslide',
    component: AdminEditSlidesComponent
  },
  {
    path: 'delateslide',
    component: AdminDelateSlidesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSlidesRoutingModule { }
