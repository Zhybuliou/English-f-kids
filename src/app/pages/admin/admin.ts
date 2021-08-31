// eslint-disable-next-line import/no-cycle
import { saveTask } from './saveCategory';
// eslint-disable-next-line import/no-cycle
import { changeNameCategory } from './changeNameCategory';
// eslint-disable-next-line import/no-cycle
import { deleteCategory } from './deleteCategory';
// eslint-disable-next-line import/no-cycle
import { getAdminWord } from './adminWord';

export function getAdmin(): void {
  const appWrap = document.getElementById('app') as HTMLElement;
  appWrap.innerHTML = '';
  const retrievedObject: any = localStorage.getItem('testObject');
  const result = JSON.parse(retrievedObject);
  const allCards = Object.keys(result);
  allCards.forEach((e) => {
    const creatCategoryCard = document.createElement('div');
    creatCategoryCard.setAttribute('class', 'category-card');
    const categoryWords = Object.keys(result[e]);
    const innerCategory = `
      <div class="category-card__delete">&#10006;</div>
      <div class="category-card__tittle">${e}</div>
      <div class="category-card__word">WORDS: ${categoryWords.length}</div>
      <div class="category-card__footer">
        <button href="#" id="category-card__footer-btn-update" class="category-card__footer-btn">Update</button>
        <a href="#/admin/word/" class="category-card__footer-btn">Add word</a>
      </div>
    `;
    creatCategoryCard.innerHTML = innerCategory;
    appWrap.append(creatCategoryCard);
  });
  const creatCategoryCard = document.createElement('div');
  creatCategoryCard.setAttribute('class', 'category-card');
  creatCategoryCard.setAttribute('id', 'add-card');
  const innerCategory = `
  <div class="category-card__tittle">Create new Category</div>
  <div class="category-card__add-category">&#10010;</div>
`;
  creatCategoryCard.innerHTML = innerCategory;
  appWrap.append(creatCategoryCard);
  creatCategoryCard.addEventListener('click', saveTask);
  changeNameCategory();
  deleteCategory();
  const switchWord = document.querySelectorAll('.category-card__footer-btn');
  switchWord.forEach((elem) => {
    elem.addEventListener('click', () => {
      const Category = elem.parentElement?.parentElement;
      const categoryTittle = Category?.querySelector('.category-card__tittle')?.textContent;
      if (categoryTittle) {
        getAdminWord(categoryTittle);
      }
    });
  });
}
