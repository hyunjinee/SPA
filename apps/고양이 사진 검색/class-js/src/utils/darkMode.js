import { $ } from './dom';

const $darkModeButton = $('.DarkModeButton');
const isUserColorTheme = localStorage.getItem('color-theme');
const isOsColorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';

const getUserTheme = () =>
  isUserColorTheme ? isUserColorTheme : isOsColorTheme;

window.onload = () => {
  if (getUserTheme() === 'dark') {
    localStorage.setItem('color-theme', 'dark');
    document.documentElement.setAttribute('color-theme', 'dark');
    $darkModeButton.innerText = '🌕';
  } else {
    localStorage.setItem('color-theme', 'light');
    document.documentElement.setAttribute('color-theme', 'light');
    $darkModeButton.innerText = '🌑';
  }
};

$darkModeButton.addEventListener('click', (e) => {
  e.preventDefault();
  if ($darkModeButton.innerText === '🌕') {
    $darkModeButton.innerText = '🌑';
    localStorage.setItem('color-theme', 'light');
    document.documentElement.setAttribute('color-theme', 'light');
  } else {
    $darkModeButton.innerText = '🌕';
    localStorage.setItem('color-theme', 'dark');
    document.documentElement.setAttribute('color-theme', 'dark');
  }
});
