/*
  Переключение светлой и тёмной темы.
  Ключ localStorage: budget-theme ('light' | 'dark').
*/
const THEME_STORAGE_KEY = 'budget-theme';

function getCurrentTheme() {
  return document.documentElement.getAttribute('data-theme') === 'dark'
    ? 'dark'
    : 'light';
}

function updateThemeToggleUI() {
  const btn = document.getElementById('themeToggle');
  const icon = document.getElementById('themeToggleIcon');
  if (!btn || !icon) return;

  const isDark = getCurrentTheme() === 'dark';
  icon.textContent = isDark ? '☀️' : '🌙';
  btn.setAttribute(
    'aria-label',
    isDark ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'
  );
  btn.title = isDark ? 'Светлая тема' : 'Тёмная тема';
}

function toggleTheme() {
  const nextTheme = getCurrentTheme() === 'dark' ? 'light' : 'dark';

  if (nextTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  updateThemeToggleUI();
}

document.addEventListener('DOMContentLoaded', updateThemeToggleUI);
