import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiUsersService } from 'src/app/service/api-users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  romaForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private serviceapi: ApiUsersService,
    private router: Router

  ) {
    this.romaForm = this.formBuilder.group({
      Email:     [ ''   , Validators.required ],
      Password: [ ''   , Validators.required ]
    })




  }

  ngOnInit(): void {
  }

  onSubmit(romaForms: any) {
    this.serviceapi.userlogin(romaForms.value.Email, romaForms.value.Password)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data)
          const redirect = this.serviceapi.redirectUrl ? this.serviceapi.redirectUrl : '/';
          this.router.navigate([redirect]);
          console.log(localStorage.getItem('token'))

        },
        error => {
          alert('User name or Password incorrect');
          console.log(error)
        });

  }

  get Email() { return this.romaForm.get('Email') }
  get Password() { return this.romaForm.get('Password') }


}
