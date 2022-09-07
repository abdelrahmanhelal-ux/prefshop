import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiAdminsService } from 'src/app/service/api-admins.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginAdmin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiAdminsService,
    private router: Router
  ) {
    this.loginAdmin = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    })

     if (this.api.isLoggedIn()) {
       this.router.navigate(['admin/']);

     }
     else {
       console.log('not signed');

     }

  }

  ngOnInit(): void {
  }

  loginAdmins(loginAdmin1: any) {
    this.api.adminlogin(
      loginAdmin1.value.Email,
      loginAdmin1.value.Password)
      .pipe(first())
      .subscribe(
        dataAdmin => {
          const redirect = this.api.redirectUrl ? this.api.redirectUrl : 'admin/';
          this.router.navigate([redirect]);
          console.log(dataAdmin)


        }, error => {
          console.log(error);
          alert('Email or Password incorrect');

        })

  }

  get Email() { return this.loginAdmin.get('Email') }
  get Password() { return this.loginAdmin.get('Password') }

}
