import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  const isBrowser = isPlatformBrowser(platformId);

  const isAuthenticated = isBrowser && localStorage.getItem('auth') === 'true';

  if (!isAuthenticated) {
    if (isBrowser) {
      alert('Você precisa estar logado para acessar esta página.');
    }
    router.navigate(['/login']);
    return false;
  }

  return true;
};
