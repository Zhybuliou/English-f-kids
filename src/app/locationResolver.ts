import { catPage } from './pages/category/category-page';
import { Page } from './pages/page/page';
import { getTable } from './pages/table/table';
// eslint-disable-next-line import/no-cycle
import { getAdmin } from './pages/admin/admin';

export const locationResolver = (location: string): void => {
  const toggleBtn = document.querySelector('#toggle-btn') as HTMLElement;
  if (toggleBtn) {
    toggleBtn.style.display = 'inline-block';
  }

  switch (location) {
    case '#/':
      catPage();
      break;
    case '#/statistic/':
      getTable();
      break;
    case '#/admin/':
      getAdmin();
      break;
    default:
      Page(location);
      break;
  }
  const categoryLinks = document.querySelectorAll('.card__link');
  categoryLinks.forEach((el) => {
    el?.addEventListener('click', () => {
      const stage : HTMLElement = <HTMLElement> el;
      const pageLink = stage.dataset.href;
      if (pageLink) {
        locationResolver(pageLink);
      }
    });
  });
};
window.addEventListener('load', () => {
  let location = window.location.hash;
  if (location.length === 0) { location = '#/'; }
  if (location) {
    locationResolver(location);
  }
});
