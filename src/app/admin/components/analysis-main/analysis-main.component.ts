import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faDollar, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-analysis-main',
  templateUrl: './analysis-main.component.html',
  styleUrls: ['./analysis-main.component.css']
})
export class AnalysisMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  lists=[

    {
      icon: faDollar,
      title: 'TOTAL SALES',
      rev : '113'
    },
    {
      icon: faUser,
      title: 'TOTAL USERS',
      rev : '6582'
    },
    {
      icon: faShoppingBag,
      title: 'TOTAL PRODUCTS',
      rev : '4450'
    }
    ,
    {
      icon: faCartShopping,
      title: 'TOTAL ORDERS',
      rev : '4450'
    }
  ]

}
