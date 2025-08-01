import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {isPlatformBrowser, NgIf} from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isBrowser: boolean;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  get logado(): boolean {
    return this.isBrowser && localStorage.getItem('auth') === 'true';
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    if (this.isBrowser) {
      localStorage.removeItem('auth');
    }
    this.router.navigate(['/login']);
  }

  verificaAutenticacao(event: Event) {
    if (!this.logado && !(event.target as HTMLElement).classList.contains('navbar-brand')) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
