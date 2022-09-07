import { Component, OnInit } from '@angular/core';
import { faImages, faStar } from '@fortawesome/free-regular-svg-icons';
import { faCartFlatbed, faCartShopping, faDashboard, faPercent, faUserGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-side-menu',
  templateUrl: './admin-side-menu.component.html',
  styleUrls: ['./admin-side-menu.component.css']
})
export class AdminSideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  sidebar = [
    {
      name: 'Dashboard',
      icon: faDashboard,
      url : 'home'
    },
    {
      name: 'Slides',
      icon: faImages,
      url : 'slides'
    },
    {
      name: 'Products',
      icon: faCartFlatbed,
      url : 'products'

    },
    {
      name: 'Orders',
      icon: faCartShopping
    },
    {
      name: 'Reviews',
      icon: faStar
    },
    {
      name: 'Customers',
      icon: faUserGroup
    },{
      name: 'Offers',
      icon: faPercent
    },
  ]

}
