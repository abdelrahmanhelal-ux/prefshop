import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBell, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ApiAdminsService } from 'src/app/service/api-admins.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(
    private api: ApiAdminsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.api.delateToken();
    window.location.href = window.location.href;
  }


  faNav = faBars;
  faMessage = faMessage;
  faNotifiction = faBell;


}
