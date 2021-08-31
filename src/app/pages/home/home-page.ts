export function HomePage(): void {
  const content = document.getElementById('page-wrapper') as HTMLElement;
  const creatHomePage = document.createElement('div') as HTMLElement;
  creatHomePage.setAttribute('id', 'home-page');
  creatHomePage.setAttribute('class', 'home-page');

  const pageHome = '<main id="app" class="app"></main>';

  creatHomePage.innerHTML = pageHome;
  content?.append(creatHomePage);
}
