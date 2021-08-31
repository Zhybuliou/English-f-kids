import { data } from '../../store/data';
import { GameRepeat } from './game-repeat';

export function repeatWords(): void {
  const words: { word: string; translation: string; image: string; audioSrc: string; }[] = [];
  const repeatWordBtn = document.querySelector('#repeat-word') as HTMLElement;
  let countWords = 0;
  repeatWordBtn.addEventListener('click', () => {
    Object.keys(data).forEach((k) => {
      const retrievedObject: any = localStorage.getItem('testObject');
      const result = JSON.parse(retrievedObject);
      const category: string = k;
      const word = Object.keys(result[`${category}`]);
      word.forEach((el) => {
        const tableWord = result[`${category}`][`${el}`].word;
        const catGame = result[`${category}`][`${el}`].category;
        const tableTranslate = result[`${category}`][`${el}`].translation;
        const audio = result[`${category}`][`${el}`].audioSrc;
        const imageCards = result[`${category}`][`${el}`].image;
        const tableGame: number = result[`${category}`][`${el}`].correct;
        const tableError: number = result[`${category}`][`${el}`].error;
        let tablePercent: number = (tableGame / (tableError + tableGame)) * 100;
        if (!tablePercent) {
          tablePercent = 0;
        }
        if (tablePercent === Infinity) {
          tablePercent = 100;
        }
        if (tablePercent > 0 && tablePercent < 50 && countWords < 8) {
          const wordsObj = {
            word: tableWord,
            translation: tableTranslate,
            image: imageCards,
            audioSrc: audio,
            category: catGame,
          };
          words.push(wordsObj);
          countWords++;
        }
      });
    });
    if (words.length) {
      GameRepeat(words);
    } else {
      const appWrap = document.getElementById('app') as HTMLElement;
      appWrap.innerHTML = '<h2 class="repeat-massage">You have no words with a correct answer rating below 50%!</h2>';
    }
  });
}
