import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAdminsService } from 'src/app/service/api-admins.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private api: ApiAdminsService,
    private router: Router) {



    if (this.api.isLoggedIn()) {

      console.log('loggedin');
    }
    else {
      this.router.navigate(['loginadmin']);

    }
  }

  ngOnInit(): void {
  }

}
