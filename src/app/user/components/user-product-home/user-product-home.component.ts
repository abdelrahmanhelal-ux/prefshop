import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-product-home',
  templateUrl: './user-product-home.component.html',
  styleUrls: ['./user-product-home.component.css']
})
export class UserProductHomeComponent implements OnInit {


  @Input() items !: any;
  @Input() itemd !: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
