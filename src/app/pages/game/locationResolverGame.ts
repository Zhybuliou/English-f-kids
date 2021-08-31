import { catPage } from '../category/category-page';
import { Game } from './game';
import { getTable } from '../table/table';

export const locationResolverGame = (location: string): void => {
  const toggleBtn = document.querySelector('#toggle-btn') as HTMLElement;
  toggleBtn.style.display = 'inline-block';
  switch (location) {
    case '#/':
      catPage();
      break;
    case '#/statistic/':
      getTable();
      break;
    default:
      Game(location);
      break;
  }
  const categoryLinks = document.querySelectorAll('.card__link');
  categoryLinks.forEach((el) => {
    el?.addEventListener('click', () => {
      const stage : HTMLElement = <HTMLElement> el;
      const pageLink = stage.dataset.href;
      if (pageLink) {
        locationResolverGame(pageLink);
      }
    });
  });
};
