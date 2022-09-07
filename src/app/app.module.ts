import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { UserComponent } from './layouts/user/user.component';
import { HeaderComponent } from './layouts/components/user/header/header.component';
import { FooterComponent } from './layouts/components/user/footer/footer.component';
import { FooterAdminComponent } from './layouts/components/admin/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './layouts/components/admin/header-admin/header-admin.component';
import { HomeComponent } from './user/home/home.component';
import { ProductComponent } from './user/product/product.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SalesComponent } from './admin/sales/sales.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubscribeComponent } from './user/components/subscribe/subscribe.component';
import { UserProductHomeComponent } from './user/components/user-product-home/user-product-home.component';
import { UserCategoryMainComponent } from './user/components/user-category-main/user-category-main.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { AdminSideMenuComponent } from './admin/components/admin-side-menu/admin-side-menu.component';
import { AnalysisMainComponent } from './admin/components/analysis-main/analysis-main.component';
import { AdminSlidesComponent } from './admin/slide/admin-slides/admin-slides.component';
import { AdminAddSlidesComponent } from './admin/slide/admin-add-slides/admin-add-slides.component';
import { AdminEditSlidesComponent } from './admin/slide/admin-edit-slides/admin-edit-slides.component';
import { AdminDelateSlidesComponent } from './admin/slide/admin-delate-slides/admin-delate-slides.component';
import { CardPagesComponent } from './admin/components/card-pages/card-pages.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminProductsComponent } from './admin/products/admin-products/admin-products.component';
import { AdminAddProductsComponent } from './admin/products/admin-add-products/admin-add-products.component';
import { AdminEditProductsComponent } from './admin/products/admin-edit-products/admin-edit-products.component';
import { AdminDelateProductsComponent } from './admin/products/admin-delate-products/admin-delate-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    FooterAdminComponent,
    HeaderAdminComponent,
    HomeComponent,
    ProductComponent,
    DashboardComponent,
    SalesComponent,
    SubscribeComponent,
    UserProductHomeComponent,
    UserCategoryMainComponent,
    LoginComponent,
    SignupComponent,
    AdminSideMenuComponent,
    AnalysisMainComponent,
    AdminSlidesComponent,
    AdminAddSlidesComponent,
    AdminEditSlidesComponent,
    AdminDelateSlidesComponent,
    CardPagesComponent,
    AdminLoginComponent,
    AdminProductsComponent,
    AdminAddProductsComponent,
    AdminEditProductsComponent,
    AdminDelateProductsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
