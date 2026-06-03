/* Раннее применение темы до отрисовки страницы (подключается в <head>) */
(function () {
  if (localStorage.getItem('budget-theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
