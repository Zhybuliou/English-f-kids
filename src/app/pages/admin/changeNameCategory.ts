// eslint-disable-next-line import/no-cycle
import { getAdmin } from './admin';

export function changeNameCategory(): void {
  const findAllUpdateBtn = document.querySelectorAll('#category-card__footer-btn-update');
  function cancelCategory(event: any): void {
    const blockCategory = (event.target.parentElement.parentElement);
    const tittleCat = blockCategory.querySelector('.category-card__tittle');
    const tittleCatText = tittleCat.textContent;

    const changeHtml = `
  <label class="label-category" for="input-category">Category Name:</label>
  <input type="text" value="${tittleCatText}" id="input-category">
  <div class="category-card__add-btn">
    <button id="cancel-change-category" class="cancel-btn">Cancel</button>
    <button id="creat-change-category" class="creat-btn">Create</button>
  </div>
`;
    blockCategory.innerHTML = changeHtml;
    const btnCancelChangeCategory = document.getElementById('cancel-change-category');
    btnCancelChangeCategory?.addEventListener('click', () => {
      getAdmin();
    });
    const btnCreatChangeCategory = document.getElementById('creat-change-category');
    btnCreatChangeCategory?.addEventListener('click', () => {
      const getInputValue = document.getElementById('input-category') as HTMLInputElement;
      const inputValue = getInputValue.value;
      const retrievedObject: any = localStorage.getItem('testObject');
      const result = JSON.parse(retrievedObject);
      if (inputValue !== tittleCatText) {
        const wordsCat = Object.values(result[`${tittleCatText}`]);
        wordsCat.forEach((e: any) => { e.category = inputValue; });
        result[`${inputValue}`] = result[`${tittleCatText}`];
        delete result[`${tittleCatText}`];
        localStorage.setItem('testObject', JSON.stringify(result));
      }
      getAdmin();
    });
  }
  findAllUpdateBtn.forEach((e) => {
    e.addEventListener('click', cancelCategory);
  });
}
