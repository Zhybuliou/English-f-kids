import { playAudio } from '../../play-audio';
import { flipCards } from '../../flip-card';
import './page-style.scss';

export function Page(category: string): void {
  const toggleBtn = document.querySelector('#toggle-btn') as HTMLElement;
  toggleBtn.style.display = 'inline-block';
  const retrievedObject: any = localStorage.getItem('testObject');
  const result = JSON.parse(retrievedObject);
  const categoryData: string = category.slice(2);
  const arrayWordCategory = Object.values(result[categoryData]);
  const appWrap = document.getElementById('app') as HTMLElement;
  appWrap.innerHTML = '';
  let count = 0;
  if (arrayWordCategory.length > 0) {
    arrayWordCategory.forEach((e: any):void => {
      const link = `./${e.image}`;
      const audioLink = `./${e.audioSrc}`;
      const contentPage = `
      <div class="thecard"  id="flip-card">
      <div class="thefront" id="thefront" data-set="${audioLink}" data-category="${e.category}" data-name="${e.word}">
            <img class="card-img" id="img" src="${link}">
            <div class="card-footer" id="card-footer">
            <h3 id="title-category">${e.word}</h3>
            <button id="flip-card-btn-turn-to-back">&#10226;</button>
            </div>
        </div>
        <div class="theback" data-set="${audioLink}">
            <img class="card-img" id="img" src="${link}">
            <div class="card-footer-back" id="card-footer">
            <h3 id="title-category">${e.translation}</h3>
            </div>
        </div>
      </div>
     `;
      const cardsHTML = document.createElement('div');
      cardsHTML.setAttribute('id', 'cards');
      cardsHTML.setAttribute('class', 'maincontainer');
      cardsHTML.setAttribute('data-src', `${audioLink}`);
      cardsHTML.innerHTML = contentPage;
      appWrap.append(cardsHTML);
      count++;
    });
  } else {
    appWrap.innerHTML = '<h2>You don\'t have words in this category</h2>';
  }

  playAudio();
  flipCards();
}
