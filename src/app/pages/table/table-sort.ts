export function tableSort(this: any): void {
  const getCellValue = (tr: any, idx: number) => tr.children[idx].innerText || tr.children[idx].textContent;

  const comparer = (idx: number, asc: any) => (a: any, b: any) => ((v1: any, v2: any) => (v1 < 101 ? v1 - v2 : v1.toString().localeCompare(v2))
  )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

  document.querySelectorAll('th').forEach((th: any) => th.addEventListener('click', (() => {
    const table = th.closest('table') as HTMLElement;
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
      .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
      .forEach((tr) => table.appendChild(tr));
  })));
}
