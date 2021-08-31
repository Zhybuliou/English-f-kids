export function flipCards(): void {
  const flipCardsArray = document.querySelectorAll('.thecard');
  flipCardsArray.forEach((el): void => {
    const btnflip = el.querySelector('#flip-card-btn-turn-to-back');
    btnflip?.addEventListener('click', () => {
      el.classList.add('transform');
    });
  });
  const app = document.querySelector('#app') as HTMLElement;
  const appNav = document.querySelector('#nav-top') as HTMLElement;
  document.addEventListener('mouseout', (e) => {
    const eventMouse = e.target;
    if (app === eventMouse || appNav === eventMouse) {
      flipCardsArray.forEach((el): void => {
        el.classList.remove('transform');
      });
    }
  });
}
