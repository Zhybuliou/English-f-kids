import { locationResolver } from '../locationResolver';
import { locationResolverGame } from '../pages/game/locationResolverGame';
import { ToggleButton } from './toggleButton';
import { toggleGame } from '../pages/game/toggleGame';
import { navTittle } from './tittle';
// import { creatBtnLogin } from './btnLogin';

export function navHeader(): void {
  const retrievedObject: any = localStorage.getItem('testObject');
  const result = JSON.parse(retrievedObject);
  const cardsCategory = Object.keys(result);
  const content = document.getElementById('page-wrapper') as HTMLElement;
  const nav = document.createElement('nav') as HTMLElement;
  nav.setAttribute('id', 'nav-top');
  content?.append(nav);

  const navHtml = '<div class="b-nav" id="b-nav"><li><a class="b-link link__active" data-href="#/" href="#/">Main Page</a></li><li><a class="b-link" data-href="#/statistic/" href="#/statistic/" >Statistic</a></li></div><div class="b-nav some-class"></div><div class="b-container"><div class="b-menu"><div class="b-bun b-bun--top"></div><div class="b-bun b-bun--mid"></div><div class="b-bun b-bun--bottom"></div></div></div>';
  nav.innerHTML = navHtml;
  cardsCategory.forEach((e: any): void => {
    const navDiv = document.getElementById('b-nav') as HTMLElement;
    const liCategory = `
    <a class="b-link" data-href="#/${e}" href="#/${e}">${e}</a>
    `;
    const creatLi = document.createElement('li');
    creatLi.innerHTML = liCategory;
    navDiv.append(creatLi);
  });
  // creatBtnLogin();
  ToggleButton();
  const body = document.getElementsByClassName('body')[0];
  const someClass = document.getElementsByClassName('some-class')[0];
  const burgerMenu = document.getElementsByClassName('b-menu')[0];
  const burgerContain = document.getElementsByClassName('b-container')[0];
  const burgerNav = document.getElementsByClassName('b-nav')[0];

  (function () {
    burgerMenu.addEventListener('click', () => {
      [body, burgerContain, burgerNav, someClass].forEach((el) => {
        el.classList.toggle('open');
      });
    }, false);
  }());
  (function () {
    someClass.addEventListener('click', () => {
      [body, burgerContain, burgerNav, someClass].forEach((el) => {
        el.classList.toggle('open');
      });
    }, false);
  }());
  // spa router //
  const navLinks = document.querySelectorAll('.b-link');
  navLinks.forEach((item) => {
    item?.addEventListener('click', () => {
      navLinks.forEach((e) => {
        if (e.classList.contains('link__active')) {
          e.classList.remove('link__active');
        }
      });
      const stage : HTMLElement = <HTMLElement> item;
      const pageLink = stage.dataset.href;
      stage.classList.toggle('link__active');
      if (typeof pageLink === 'string') {
        const checkBox = document.getElementById('togglerID') as HTMLInputElement;
        if (checkBox.checked) {
          locationResolverGame(pageLink);
        } else {
          locationResolver(pageLink);
        }
        [body, burgerContain, burgerNav, someClass].forEach((el) => {
          el.classList.toggle('open');
        });
      }
    });
  });
  toggleGame();
  navTittle();
}
