export function adminNav(): void {
  const content = document.getElementById('page-wrapper') as HTMLElement;
  const nav = document.createElement('nav') as HTMLElement;
  nav.setAttribute('id', 'nav-admin');
  nav.setAttribute('class', 'nav-admin__wrapper');
  content?.append(nav);

  const navHtml = `<div class="admin-nav">
    <ul class="admin-nav-list">
     <li class="li-first"><a class="admin-nav-list__item" href="#/admin/">Categories</a></li>
     <li><a class="admin-nav-list__item" href="#">Words</a></li>
     <li class="li-last"><a class="admin-nav-list__item" href="/english-for-kids/dist/#/">Log out</a></li>
    </ul>
  </div>`;
  nav.innerHTML = navHtml;
}
