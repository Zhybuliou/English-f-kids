import './styles.scss';
import './app/nav/navStyle.scss';
import './app/pages/category/categoryPage.scss';
import './app/pages/table/table.scss';
import './app/footer/footer.scss';
import './app/pages/admin/adminStyle.scss';
import { navHeader } from './app/nav/nav';
import { HomePage } from './app/pages/home/home-page';
import { footer } from './app/footer/footer';
import { adminNav } from './app/pages/admin/adminNav';
import { data } from './app/store/data';

if (localStorage.getItem('testObject') === null) {
  localStorage.setItem('testObject', JSON.stringify(data));
}
const content = document.createElement('section') as HTMLElement;
content.setAttribute('id', 'page-wrapper');
const rootDiv = document.querySelector('body') as HTMLElement;
rootDiv.append(content);

// add Nav // and SPA nav Router //
if (window.location.hash === '#/admin/') {
  adminNav();
} else {
  navHeader();
}
HomePage();
footer();
// reload page //
if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
  const inputValue = document.getElementById('togglerID') as HTMLInputElement;
  window.location.assign('');
  inputValue.classList.add('checkedCard');
}
