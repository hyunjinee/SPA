import { $ } from '@spa/utils';

const isUserColorTheme = localStorage.getItem('color-theme');
const isOSColorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const getUserTheme = () => (isUserColorTheme ? isUserColorTheme : isOSColorTheme);

export const initColorTheme = () => {
  const $darkModeButton = $<HTMLDivElement>('.DarkModeButton');

  if (!$darkModeButton) {
    return;
  }

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

  if (getUserTheme() === 'dark') {
    localStorage.setItem('color-theme', 'dark');
    document.documentElement.setAttribute('color-theme', 'dark');
    ($darkModeButton as HTMLDivElement).innerText = '🌕';
  } else {
    localStorage.setItem('color-theme', 'light');
    document.documentElement.setAttribute('color-theme', 'light');
    ($darkModeButton as HTMLDivElement).innerText = '🌑';
  }
};
