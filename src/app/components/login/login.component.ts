import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin(): void {
    const mockUser = 'admin';
    const mockPassword = 'admin';

    if (this.email === mockUser && this.password === mockPassword) {
      localStorage.setItem('auth', 'true');
      this.router.navigate(['/home']);
    } else {
      alert('Usuário ou senha inválidos');
    }
  }
}
