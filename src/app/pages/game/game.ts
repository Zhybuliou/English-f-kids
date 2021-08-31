import { data } from '../../store/data';
import '../page/page-style.scss';

export function Game(category: string): void {
  const allSound: string[] = [];
  const retrievedObject: any = localStorage.getItem('testObject');
  const result = JSON.parse(retrievedObject);
  const categoryData: string = category.slice(2);
  const arrayWordCategory = Object.values(result[categoryData]);
  const appWrap = document.getElementById('app') as HTMLElement;
  appWrap.innerHTML = '';
  let count = 0;
  arrayWordCategory.forEach((e:any):void => {
    const link = `./${e.image}`;
    const audioLink = `./${e.audioSrc}`;
    allSound.push(audioLink);
    const contentPage = `
    <div class="thecard"  id="flip-card">
      <div class="thefront" id="thefront">
          <img class="card-img-gem" id="img" src="${link}" data-audio="${audioLink}" data-category="${e.category}" data-name="${e.word}">
          <div class="card-footer" id="card-footer">
      </div>
    </div>
   `;
    const cardsHTML = document.createElement('div');
    cardsHTML.setAttribute('id', 'cards');
    cardsHTML.setAttribute('class', 'maincontainer');
    cardsHTML.innerHTML = contentPage;
    appWrap.append(cardsHTML);
    count++;
  });
  const startBtn = '<button class="start-btn">Start game</button>';
  const creatStartBtn = document.createElement('div');
  creatStartBtn.classList.add('start-btn__div');
  creatStartBtn.innerHTML = startBtn;
  appWrap.append(creatStartBtn);
  // if click btn start //
  const rantingBlock = document.createElement('div');
  rantingBlock.classList.add('ranting');
  appWrap.prepend(rantingBlock);
  ///
  const allCards = document.querySelectorAll('#cards');
  allSound.sort(() => Math.random() - 0.5);
  let countSound = 0;
  let countError = 0;

  creatStartBtn.addEventListener('click', () => {
    if (!(creatStartBtn.classList.contains('chooseStart'))) {
      const repeatBtn = '<button class="start-btn start-btn-repeat">&#10226;</button>';
      creatStartBtn.classList.add('chooseStart');
      creatStartBtn.innerHTML = repeatBtn;
      if (allSound) {
        new Audio(allSound[countSound]).play();
      }
      allCards.forEach((e) => {
        e.addEventListener('click', (el) => {
          const elem: any = el.target;
          const elemSound = elem.getAttribute('data-audio');
          const categoryGame = elem.getAttribute('data-category');
          const nameWord = elem.getAttribute('data-name');
          if (elemSound === allSound[countSound]) {
            // Save empty data //
            if (localStorage.getItem('testObject') === null) {
              localStorage.setItem('testObject', JSON.stringify(data));
            }
            const retrievedObjects: any = localStorage.getItem('testObject');
            const results = JSON.parse(retrievedObjects);
            results[`${categoryGame}`][`${nameWord}`].correct += 1;
            localStorage.setItem('testObject', JSON.stringify(results));
            e.classList.add('choose');
            new Audio('./audio/correct.mp3').play();
            countSound += 1;
            const starSuccess = document.createElement('div');
            starSuccess.classList.add('star-success');
            starSuccess.innerHTML = '<img  width="40px" height= "40px" src="./img/star-win.png" alt="star-win">';
            rantingBlock.append(starSuccess);
            if (allSound) {
              new Audio(allSound[countSound]).play();
            }
            elem.style.opacity = '0.3';
            elem.style.eventPoint = 'none';
            if (countSound === 8) {
              if (countError === 0) {
                new Audio('./audio/success.mp3').play();
                appWrap.innerHTML = '<div><h2>Win !!!</h2></div><img style ="margin-bottom: 20%" src="./img/success.jpg" alt="success">';
                setTimeout(() => {
                  const inputValue = document.getElementById('togglerID') as HTMLInputElement;
                  window.location.assign('');
                  inputValue.classList.add('checkedCard');
                }, 3000);
              } else {
                new Audio('./audio/failure.mp3').play();
                appWrap.innerHTML = `
                <div><h2>Error ${countError}</h2></div>
                <img style ="margin-bottom: 20%" src="./img/failure.jpg" alt="success">`;
                setTimeout(() => {
                  const inputValue = document.getElementById('togglerID') as HTMLInputElement;
                  window.location.assign('');
                  inputValue.classList.add('checkedCard');
                }, 3000);
              }
            }
          } else if (!(elem.style.opacity === '0.3')) {
            new Audio('./audio/error.mp3').play();
            const starError = document.createElement('div');
            starError.classList.add('star-error');
            starError.innerHTML = '<img  width="40px" height= "40px" src="./img/star.png" alt="star">';
            rantingBlock.append(starError);
            countError += 1;
            const errorCard = document.querySelector(`[data-audio="${allSound[countSound]}"]`) as HTMLElement;
            const categoryNameCard = errorCard.getAttribute('data-category');
            const nameCard = errorCard.getAttribute('data-name');
            if (localStorage.getItem('testObject') === null) {
              localStorage.setItem('testObject', JSON.stringify(data));
            }
            const retrievedObjects: any = localStorage.getItem('testObject');
            const results = JSON.parse(retrievedObjects);
            results[`${categoryNameCard}`][`${nameCard}`].error += 1;
            localStorage.setItem('testObject', JSON.stringify(results));
          }
        });
      });
    } else {
      new Audio(allSound[countSound]).play();
    }
  });
}
