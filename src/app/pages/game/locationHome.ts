export function locationHome(): void {
  const inputValue = document.getElementById('togglerID') as HTMLInputElement;
  window.location.assign('');
  inputValue.classList.add('checkedCard');
}
