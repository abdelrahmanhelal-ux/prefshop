import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

  redirectUrl:any;
  baseUrl:string  = 'http://localhost/api';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpclient: HttpClient) { }

  public userregister(
    Firstname:any,
    Lastname:any,
    Usernames:any,
    Email:any,
    Password:any,
    Repassword:any
    ){
    return this.httpclient.post(this.baseUrl + '/signup.php',
    {Firstname,Lastname, Usernames, Email,Password, Repassword})
    .pipe(map(Users => {
      return Users;
    }));
  }

  public userlogin(Email:any, Password:any){
    return this.httpclient.post<any>(this.baseUrl + '/login.php', {Email , Password})
    .pipe(map(Users => {
      this.setToken(Users.Email);
      this.getLoggedInName.emit(true);
      return Users;
    }));
  }






  setToken(token: string){
    localStorage.setItem('token', token)
  }
  getToken(){
    return localStorage.getItem('token');
  }

  delateToken(){
    localStorage.removeItem('token');
  }


  isLoggedIn(){
    const userToken = this.getToken();
    if (userToken != null) {
      return true

    }
    return false
  }
}
