import { Component, OnInit } from '@angular/core';
import { faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-category-main',
  templateUrl: './user-category-main.component.html',
  styleUrls: ['./user-category-main.component.css']
})
export class UserCategoryMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  category = [
    {
        names: 'Mobile'
    },
    {
        names: 'Phone'
    },
    {
        names: 'Fashions'
    },
    {
        names: 'Mens'
    },
    {
        names: 'Womans'
    },
    {
        names: 'Shoes'
    },
    {
        names: 'Beauty'
    },
    {
        names: 'Games'
    },
    {
        names: 'PC'
    },
]


list = faList;

}
