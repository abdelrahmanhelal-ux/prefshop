import { Component, OnInit } from '@angular/core';
import { faHeadset, faTruck, faTruckFast } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer-user',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  service = [
    {
      icon: faTruckFast,
      text: 'FAST SHIPPING',
      description: `FAST SHIPPING IN <span> USA</span>`,
      display: 'm7n block'

    },
    {
      icon: faTruck,
      text: 'FREE SHIPPING',
      description: `FREE SHIPPING OVER <span>500$<span>`,
      display: 'm7n block'

    },
    {
      icon: faHeadset,
      text: 'SUPPORT',
      description: `24 / <span> 24H<span>`,
      display: 'm7n none'
    }
  ]

}
