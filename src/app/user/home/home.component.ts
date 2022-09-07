import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  Top= 'Top Products';

  Sale= 'Top Sales'




  TopProducts = [



    {
      imag: '../../../assets/images/products/150x150.png',
      price: '15$'
    },
    {
      imag: '../../../assets/images/products/150x150.png',
      price: '12$'
    },
    {
      imag: '../../../assets/images/products/150x150.png',
      price: '411$'
    },
    {
      imag: '../../../assets/images/products/150x150.png',
      price: '150$'
    },
    {
      imag: '../../../assets/images/products/150x150.png',
      price: '99.9$'
    },
    {
      imag: '../../../assets/images/products/150x150.png',
      price: '99.9$'
    },
    {
      imag: '../../../assets/images/products/150x150.png',
      price: '99.9$'
    }
  ]

  TopSales = [


    {
      imag: '../../../assets/images/products/150x150.png',
      price: '154$'
    },
    {
      imag: '../../../assets/images/products/150x150.png',
      price: '127$'
    },
    {
      imag: '../../../assets/images/products/150x150.png',
      price: '4171$'
    },
    {
      imag: '../../../assets/images/products/150x150.png',
      price: '1750$'
    },
    {
      imag: '../../../assets/images/products/150x150.png',
      price: '997.9$'
    },
    {
      imag: '../../../assets/images/products/150x150.png',
      price: '959.9$'
    },
    {
      imag: '../../../assets/images/products/150x150.png',
      price: '929.9$'
    }
  ]


}
