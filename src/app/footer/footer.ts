export function footer(): void {
  const getBody = document.querySelector('body');
  const creatFooter = document.createElement('footer');
  creatFooter.classList.add('footer');
  const footerHtml = '<div class="footer-container"><a class="github" href="https://github.com/Zhybuliou" target="_blank" rel="noopener noreferrer">github</a><h3 class="github">since 2021</h3><a class="rss" href="https://rs.school/js/" target="_blank" rel="noopener noreferrer"><span class="rss-year">RS School\'21</span></a></div>';
  creatFooter.innerHTML = footerHtml;
  getBody?.append(creatFooter);
}
