import { data } from '../../store/data';

export function catPage(): void {
  const retrievedObject: any = localStorage.getItem('testObject');
  const result = JSON.parse(retrievedObject);
  const cardsCategory = Object.keys(result);
  const appWrap = document.getElementById('app') as HTMLElement;
  appWrap.innerHTML = '';

  cardsCategory.forEach((el: any):void => {
    const output: any = Object.values(result[el]);
    if (output.length > 0) {
      const link = `./${output[0].image}`;
      const checkBox = document.getElementById('togglerID') as HTMLInputElement;
      let contentPage;
      if (checkBox.checked) {
        contentPage = `
        <div class="card">
        <a href="#/${output[0].category}" data-href="#/${output[0].category}" class="card__link">
          <img class="card-img" id="img" src="${link}">
          <div class="card-footer card-footer-red" id="card-footer">
           <h3 id="title-category">${output[0].category}</h3>
          </div>
        </a>
        </div>
       `;
      } else {
        contentPage = `
        <div class="card">
        <a href="#/${output[0].category}" data-href="#/${output[0].category}" class="card__link">
          <img class="card-img" id="img" src="${link}">
          <div class="card-footer" id="card-footer">
           <h3 id="title-category">${output[0].category}</h3>
          </div>
        </a>
        </div>
       `;
      }
      const cardsHTML = document.createElement('div');
      cardsHTML.setAttribute('id', 'cards');
      cardsHTML.innerHTML = contentPage;
      appWrap.append(cardsHTML);
    }
  });
  if (localStorage.getItem('testObject') === null) {
    localStorage.setItem('testObject', JSON.stringify(data));
  }
}
