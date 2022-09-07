import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pages',
  templateUrl: './card-pages.component.html',
  styleUrls: ['./card-pages.component.css']
})
export class CardPagesComponent implements OnInit {


  @Input() title : any;
  @Input() url : any;


  constructor() { }

  ngOnInit(): void {
  }

}
