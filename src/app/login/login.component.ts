// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpErrorResponse } from "@angular/common/http";

interface LoginForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: LoginForm = {
    email: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) { }

  login() {
    this.userService.login(this.loginForm).subscribe(
      (result) => {
        console.log('Response from backend:', result);

        if (result === 'admin') {
          console.log('Admin login detected.');
          this.router.navigate(['/home']);
        } else if (result === 'client') {
          console.log('Client login detected.');
          this.router.navigate(['/nevbar']);
        } else {
          console.log('Invalid credentials. Handle this as needed.');
        }
      },
      (error) => {
        console.error('An error occurred during login:', error);
        if (error instanceof HttpErrorResponse) {
          console.error('Backend returned status code:', error.status);
          console.error('Response body:', error.error);
        }
      }
    );
  }
}


