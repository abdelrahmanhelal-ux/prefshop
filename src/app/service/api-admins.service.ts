import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAdminsService {

  redirectUrl:any;
  baseUrl:string  = 'http://localhost/api';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();


  constructor(private httpclient: HttpClient) { }

  public adminlogin(Email:any, Password:any){
    return this.httpclient.post<any>(this.baseUrl + '/adminLogin.php', {Email , Password})
    .pipe(map(Admins => {
      this.setToken(Admins.Email);
      this.getLoggedInName.emit(true);
      return Admins;
    }));
  }






  setToken(tokenAdmin: string){
    localStorage.setItem('tokenAdmin', tokenAdmin)
  }
  getToken(){
    return localStorage.getItem('tokenAdmin');
  }

  delateToken(){
    localStorage.removeItem('tokenAdmin');
  }


  isLoggedIn(){
    const AdminToken = this.getToken();
    if (AdminToken != null) {
      return true

    }
    return false
  }

}
