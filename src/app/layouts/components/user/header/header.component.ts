import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faTruck } from '@fortawesome/free-solid-svg-icons';
import { ApiUsersService } from 'src/app/service/api-users.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  loginBtn:boolean = false;
  logoutBtn: boolean = false;










  constructor(private apiserve: ApiUsersService) {
    apiserve.getLoggedInName.subscribe(name => this.changeName(name));
    if (this.apiserve.isLoggedIn()) {
      console.log('loggedin');
      this.loginBtn=false;
      this.logoutBtn=true;
    }
    else{
      this.loginBtn=true;
      this.logoutBtn=false;

    }
  }


  private changeName(name: boolean): void {
    this.loginBtn = !name;
    this.logoutBtn = name;
  }
  logout(){
    this.apiserve.delateToken();
    window.location.href = window.location.href;
  }

  ngOnInit(): void {
  }


  lang = [
    {
      cur: 'USD'
    },
    {
      cur: 'EUR'
    },
  ]

  search = faSearch;
  envelope = faEnvelope;
  truk = faTruck;


}
