import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiUsersService } from 'src/app/service/api-users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  _romare: FormGroup;

  constructor(
    private fb      : FormBuilder,
    private apiserv : ApiUsersService,
    private router  : Router
  ) {
    this._romare = this.fb.group({
      Firstname   :    ['', Validators.required],
      Lastname    :    ['', Validators.required],
      Usernames   :    ['', Validators.required],
      Email        :    ['', Validators.required],
      Password     :    ['', Validators.required],
      Repassword  :    ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  postData(_romares:any) {
    this.apiserv.userregister(
      _romares.value.Firstname  ,
      _romares.value.Lastname   ,
      _romares.value.Usernames  ,
      _romares.value.Email       ,
      _romares.value.Password    ,
      _romares.value.Repassword
      )
      .pipe(first())
      .subscribe(
        postData => {
          console.log(postData)
          this.router.navigate(['login']);

        },
        error => {
          alert('all forms error');
          console.log(error)
        });

  }


  get Firstname() { return this._romare.get('Firstname') }
  get Lastname() { return this._romare.get('Lastname') }
  get Usernames() { return this._romare.get('Usernames') }
  get Email() { return this._romare.get('Email') }
  get Password() { return this._romare.get('Password') }
  get Repassword() { return this._romare.get('Repassword') }

}
