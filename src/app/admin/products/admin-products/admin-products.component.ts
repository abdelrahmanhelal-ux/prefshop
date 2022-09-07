import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title1  = 'ADD PRODUCTS'
  url1    = 'admin/products/add'

  title2  = 'Edit PRODUCTS'
  url2    = 'admin/products/edit'

  title3  = 'Delate PRODUCTS'
  url3    = 'admin/products/delate'
}
