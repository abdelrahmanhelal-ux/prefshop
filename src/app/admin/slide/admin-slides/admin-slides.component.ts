import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-slides',
  templateUrl: './admin-slides.component.html',
  styleUrls: ['./admin-slides.component.css']
})
export class AdminSlidesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title1  = 'ADD Slides'
  url1    = 'admin/slides/addslide'

  title2  = 'Edit Slides'
  url2    = 'admin/slides/editslide'

  title3  = 'Delate Slides'
  url3    = 'admin/slides/delateslide'
}
