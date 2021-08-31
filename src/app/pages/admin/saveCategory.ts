// eslint-disable-next-line import/no-cycle
import { getAdmin } from './admin';

export function saveTask(): void {
  const addCard = document.querySelector('#add-card');
  const creatCategoryCard = document.createElement('div');
  creatCategoryCard.setAttribute('class', 'category-card');
  const innerCategory = `
  <label class="label-category" for="input-category">Category Name:</label>
  <input type="text" placeholder="Draw" id="input-category">
  <div class="category-card__add-btn">
    <button id="cancel-add-category" class="cancel-btn">Cancel</button>
    <button id="creat-add-category" class="creat-btn">Create</button>
  </div>
`;
  creatCategoryCard.innerHTML = innerCategory;
  addCard?.before(creatCategoryCard);

  const cancelAddCategory = document.querySelectorAll('#cancel-add-category');
  function cancelCategory(event: any): void {
    event.target.parentElement.parentElement.remove();
  }
  cancelAddCategory.forEach((e) => {
    e.addEventListener('click', cancelCategory);
  });
  // add category localstorage //
  const createBtn = document.querySelectorAll('#creat-add-category');
  function addCategoryInStor(event: any): void {
    const myCard = event.target.parentElement.previousSibling.previousSibling;
    if (myCard.value) {
      const myObj: string = myCard.value;
      const obj: any = { [myObj]: {} };
      const retrievedObject: any = localStorage.getItem('testObject');
      const result = JSON.parse(retrievedObject);
      const itemObject = Object.assign(obj, result);
      localStorage.setItem('testObject', JSON.stringify(itemObject));
      event.target.parentElement.parentElement.remove();
      getAdmin();
    } else {
      myCard.setAttribute('style', 'border: 2px solid #E53935');
    }
  }
  createBtn.forEach((e) => {
    e.addEventListener('click', addCategoryInStor);
  });
}
