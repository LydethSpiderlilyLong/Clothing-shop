import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly userSignal = signal<string | null>(
    localStorage.getItem('cbc_user')
  );

  readonly user = this.userSignal.asReadonly();

  login(username: string, password: string): boolean {

    if (!username.trim() || !password.trim()) {
      return false;
    }

    localStorage.setItem('cbc_user', username);

    this.userSignal.set(username);

    return true;
  }

  logout(): void {

    localStorage.removeItem('cbc_user');

    this.userSignal.set(null);
  }

  isLoggedIn(): boolean {
    return this.userSignal() !== null;
  }
}
