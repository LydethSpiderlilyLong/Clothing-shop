import {
  Component,
  inject
} from '@angular/core';

import {
  FormsModule
} from '@angular/forms';

import {
  Router,
  RouterLink
} from '@angular/router';

import {
  AuthService
} from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private readonly authService =
    inject(AuthService);

  private readonly router =
    inject(Router);

  username = '';

  password = '';

  errorMessage = '';

  login(): void {

    const success =
      this.authService.login(
        this.username,
        this.password
      );

    if (success) {

      this.errorMessage = '';

      this.router.navigate(['/']);

    } else {

      this.errorMessage =
        'Please enter username and password.';

    }
  }
}
