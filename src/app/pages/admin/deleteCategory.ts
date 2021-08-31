// eslint-disable-next-line import/no-cycle
import { getAdmin } from './admin';

export function deleteCategory(): void {
  const getAllDeleteCategoryBtn = document.querySelectorAll('.category-card__delete');

  function funcDeleteCategory(event: any): void {
    const blockCategory = (event.target.parentElement);
    const tittleCat = blockCategory.querySelector('.category-card__tittle');
    const tittleCatText = tittleCat.textContent;
    const retrievedObject: any = localStorage.getItem('testObject');
    const result = JSON.parse(retrievedObject);
    delete result[tittleCatText];
    localStorage.setItem('testObject', JSON.stringify(result));
    getAdmin();
  }

  getAllDeleteCategoryBtn.forEach((e) => {
    e.addEventListener('click', funcDeleteCategory);
  });
}
