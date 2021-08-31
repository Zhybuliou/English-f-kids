import { data } from './store/data';

export function playAudio(): void {
  const allAudio = document.querySelectorAll('#thefront');
  allAudio.forEach((e) => {
    e.addEventListener('click', () => {
      const audioLink = e.getAttribute('data-set');
      const category = e.getAttribute('data-category');
      const nameWord = e.getAttribute('data-name');
      if (audioLink) {
        new Audio(audioLink).play();
      }
      // Save empty data //
      if (localStorage.getItem('testObject') === null) {
        localStorage.setItem('testObject', JSON.stringify(data));
      }
      const retrievedObject: any = localStorage.getItem('testObject');
      const result = JSON.parse(retrievedObject);
      result[`${category}`][`${nameWord}`].train += 1;
      localStorage.setItem('testObject', JSON.stringify(result));
    });
  });
}
