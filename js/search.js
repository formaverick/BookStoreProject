document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.search').forEach((search) => {
    const select = search.querySelector('.custom-select');
    const selected = select.querySelector('.selected');
    const options = select.querySelector('.select-options');

    selected.addEventListener('click', () => {
      select.classList.toggle('open');
      search.classList.toggle('active');
    });

    options.querySelectorAll('li').forEach((item) => {
      item.addEventListener('click', () => {
        selected.childNodes[0].textContent = item.textContent;
        select.classList.remove('open');
        search.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!select.contains(e.target)) {
        select.classList.remove('open');
        search.classList.remove('active');
      }
    });
  });
});