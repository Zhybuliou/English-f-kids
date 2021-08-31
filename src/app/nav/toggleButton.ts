export function ToggleButton():void {
  const htmlToggleBtn = '<label class="button-toggle-wrap"><h2 class="my-text" id="btn-text">Train</h2><input id="togglerID" class="toggler" type="checkbox" data-toggle="button-toggle"/><div class="button-toggle" id="bth-toggle"><div class="handle"><div class="bars"></div></div></div></label>';
  const toggleBtn = document.createElement('div');
  toggleBtn.setAttribute('id', 'toggle-btn');
  toggleBtn.setAttribute('class', 'toggle-btn');
  toggleBtn.innerHTML = htmlToggleBtn;
  const navTop = document.getElementById('nav-top');
  navTop?.append(toggleBtn);

  function checkbox() {
    const checkBox = document.getElementById('togglerID') as HTMLInputElement;
    checkBox?.addEventListener('click', () => {
      const toggleStyle = document.getElementById('bth-toggle') as HTMLLIElement;
      const btnText = document.getElementById('btn-text') as HTMLLIElement;
      if (checkBox.checked) {
        toggleStyle.style.backgroundColor = '#FF7373';
        btnText.innerText = 'Start';
        btnText.style.left = '50px';
      } else {
        toggleStyle.style.backgroundColor = '#29df5f';
        btnText.innerText = 'Train';
        btnText.style.left = '10px';
      }
    });
  }
  checkbox();
}
