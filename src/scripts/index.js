import 'regenerator-runtime';
import '../styles/main.css';
import onScrollListener from './utils/onscroll';
import App from './views/app';

const app = new App({
  button: document.querySelector('#menu-button'),
  drawer: document.querySelector('#sidebar'),
  content: document.querySelector('#wrapper-content'),
  bgContent: document.querySelector('.bg-body-sidebar-active'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  window.scrollTo(0, 0);
});

window.addEventListener('scroll', () => {
  onScrollListener();
});

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
  app.renderPage();
});
