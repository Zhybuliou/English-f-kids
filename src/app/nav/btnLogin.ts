export function creatBtnLogin(): void {
  const navDiv = document.getElementById('b-nav') as HTMLElement;
  const btnLogin = document.createElement('button');
  btnLogin.innerText = 'Login';
  btnLogin.classList.add('btn-login');
  btnLogin.setAttribute('id', 'myBtn');
  navDiv.append(btnLogin);

  const body = document.querySelector('.body');
  const modalWindow = document.createElement('div');
  modalWindow.setAttribute('class', 'modal');
  modalWindow.setAttribute('id', 'myModal');

  modalWindow.innerHTML = `
  <div class="modal-content">
    <h2 class="modal-tittle">login</h2>
    <div class="form-wrapper">
      <form class="form" action="#/admin/" method="GET">
        <input type="text" class="input" id="input-text" placeholder="username" required>
        <input type="password" class="input" id="input-password" placeholder="password" required>
      <div class="form-footer">
      <span class="close">Cancel</span>
      <input type="submit" class="btn-submit" id="submit-form" value="login">
      </div>
      </form>
    </div>
  </div>
  `;
  body?.append(modalWindow);
  const modal = document.getElementById('myModal') as HTMLElement;
  const btn = document.getElementById('myBtn') as HTMLElement;
  const span = document.getElementsByClassName('close')[0] as HTMLElement;
  const someClass = document.getElementsByClassName('some-class')[0];
  const burgerContain = document.getElementsByClassName('b-container')[0];
  const burgerNav = document.getElementsByClassName('b-nav')[0];
  btn.onclick = () => {
    modal.style.display = 'block';
    [burgerContain, burgerNav, someClass].forEach((el) => {
      el.classList.toggle('open');
    });
  };
  span.onclick = () => {
    modal.style.display = 'none';
  };
  // window.onclick = (event) => {
  //   if (event.target !== modal) {
  //     modal.style.display = 'none';
  //   }
  // };
}
