export function addWord(): void {
  const btnAddWord = document.querySelector('#add-word');
  function formAddWord(): void {
    const appWrap = document.getElementById('app') as HTMLElement;
    const creatCategoryCard = document.createElement('div');
    creatCategoryCard.setAttribute('class', 'category-word');
    creatCategoryCard.setAttribute('id', 'add-card');
    const innerCategory = `
    <label class="label-category" for="input-word">Word:</label>
    <input type="text" value="Word" id="input-word">
    <label class="label-category" for="input-translation">Translation:</label>
    <input type="text" value="Translation" id="input-translation">
    <label class="label-category" for="input-select-sound">select-sound</label>
    <input type='file' id="input-select-sound" onchange="readURL(this);" />
    <label class="label-category" for="input-select-img">select-sound</label>
    <input type='file' id="input-select-img" onchange="readURL(this);" />
    <button id="cancel-change-category" class="cancel-btn">Cancel</button>
`;
    creatCategoryCard.innerHTML = innerCategory;
    appWrap.append(creatCategoryCard);
  }
  btnAddWord?.addEventListener('click', formAddWord);
}
