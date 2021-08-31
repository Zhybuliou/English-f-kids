// eslint-disable-next-line import/no-cycle
import { getAdmin } from './admin';
import { addWord } from './addWord';

export function getAdminWord(string: string): void {
  const appWrap = document.getElementById('app') as HTMLElement;
  appWrap.innerHTML = '';
  const retrievedObject: any = localStorage.getItem('testObject');
  const result = JSON.parse(retrievedObject);
  const allCards = Object.keys(result[string]);
  allCards.forEach((e) => {
    const creatCategoryCard = document.createElement('div');
    creatCategoryCard.setAttribute('class', 'word-card');
    const cardWord = result[string][e];
    const innerCategory = `
      <div class="word-card__delete">&#10006;</div>
      <div class="word-card__tittle">Word: ${cardWord.word}</div>
      <div class="word-card__translation">Translation: ${cardWord.translation}</div>
      <div class="word-card__sound" data-sound="${cardWord.audioSrc}">Sound file: ${cardWord.audioSrc.substr(6)}</div>
      <div class="word-card__img">Image: <img src="${cardWord.image}" alt="word"></div>
      <button class="word-card__btn-change">Change</button>
    `;
    creatCategoryCard.innerHTML = innerCategory;
    appWrap.append(creatCategoryCard);
  });
  const creatCategoryCard = document.createElement('div');
  creatCategoryCard.setAttribute('class', 'category-card');
  creatCategoryCard.setAttribute('id', 'add-card');
  const innerCategory = `
  <div class="category-card__tittle">Add new word</div>
  <div class="category-card__add-category" id="add-word">&#10010;</div>
`;
  creatCategoryCard.innerHTML = innerCategory;
  appWrap.append(creatCategoryCard);
  const returnCategory = document.querySelector('.li-first');
  returnCategory?.addEventListener('click', () => {
    getAdmin();
  });
  addWord();
}
