import { data } from '../../store/data';

export function tableBtnReset(): void {
  const getReset = document.getElementById('reset') as HTMLElement;
  getReset?.addEventListener('click', () => {
    localStorage.clear();
    if (localStorage.getItem('testObject') === null) {
      localStorage.setItem('testObject', JSON.stringify(data));
    }
    const app = document.querySelector('#app') as HTMLElement;
    const toggleBtn = document.querySelector('#toggle-btn') as HTMLElement;
    toggleBtn.style.display = 'none';
    const tableHtml = '<table class="table"><thead><tr><th scope="col">#</th><th scope="col">Category</th><th scope="col">Word</th><th scope="col">Translation</th><th scope="col">Train</th><th scope="col">Game</th><th scope="col">Wrong</th><th scope="col">%</th></tr></thead></table>';
    app.innerHTML = tableHtml;
    const allCards = Object.keys(data);
    let id = 0;
    allCards.forEach((e) => {
      const retrievedObject: any = localStorage.getItem('testObject');
      const result = JSON.parse(retrievedObject);
      const category: string = e;
      const word = Object.keys(result[`${category}`]);
      word.forEach((el) => {
        const tableWord = result[`${category}`][`${el}`].word;
        const tableTranslate = result[`${category}`][`${el}`].translation;
        const tableCategory = e;
        const tableTrain = result[`${category}`][`${el}`].train;
        const tableGame: number = result[`${category}`][`${el}`].correct;
        const tableError: number = result[`${category}`][`${el}`].error;
        let tablePercent: number = (tableGame / tableError) * 100;
        if (!tablePercent) {
          tablePercent = 0;
        }
        if (tablePercent === Infinity) {
          tablePercent = 100;
        }
        id++;

        const tableTr = document.createElement('tr');
        if ((id % 2) === 0) {
          tableTr.style.backgroundColor = '#D1E7DD';
        } else {
          tableTr.style.backgroundColor = '#fff';
        }
        const tableTrInner = `
      <th scope="row">${id}</th><td>${tableCategory}</td><td>${tableWord}</td><td>${tableTranslate}</td><td>${tableTrain}</td><td>${tableGame}</td><td>${tableError}</td><td>${Math.round(tablePercent)}</td>
      `;
        tableTr.innerHTML = tableTrInner;
        const thead = document.querySelector('table');
        thead?.append(tableTr);
      });
    });
    const tableBtn = document.createElement('div');
    tableBtn.classList.add('btn-table');
    const tableInner = '<button id="reset" class="reset">Reset</button><button id="repeat-word" class="repeat-word">Repeat words</button>';
    tableBtn.innerHTML = tableInner;
    app.prepend(tableBtn);
  });
}
