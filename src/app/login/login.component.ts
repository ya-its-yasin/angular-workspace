import { Component } from '@angular/core';
import { Login } from '../model/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  loginObject : Login =  new Login("yasin","testing");

    
  doLogin() {
    
    
    window.alert("Hello "+this.loginObject.userName);
    
  }
}
