export function navTittle(): void {
  const navTop = document.getElementById('nav-top') as HTMLElement;
  const tittle = document.createElement('h1') as HTMLElement;
  tittle.classList.add('nav-tittle');
  tittle.innerText = 'English for kids';
  navTop?.append(tittle);
}
