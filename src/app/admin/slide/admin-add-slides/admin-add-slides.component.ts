import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-add-slides',
  templateUrl: './admin-add-slides.component.html',
  styleUrls: ['./admin-add-slides.component.css']
})
export class AdminAddSlidesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  title1  = 'ADD Slides'
  url1    = 'admin/addslides'

  title2  = 'Edit Slides'
  url2    = 'admin/edit'

  title3  = 'Delate Slides'
  url3    = 'admin/delate'

}
