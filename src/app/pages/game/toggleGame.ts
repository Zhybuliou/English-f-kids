import { locationResolver } from '../../locationResolver';
import { locationResolverGame } from './locationResolverGame';

export function toggleGame(): void {
  const checkBox = document.getElementById('togglerID') as HTMLInputElement;
  checkBox?.addEventListener('click', () => {
    if (checkBox.checked) {
      let location = window.location.hash;
      if (location.length === 0) { location = '#/'; }
      locationResolverGame(location);
    } else {
      let location = window.location.hash;
      if (location.length === 0) { location = '#/'; }
      locationResolver(location);
    }
  });
}
