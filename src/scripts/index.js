/* eslint-disable no-console */
/* eslint-disable no-undef */
import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// const firstRestaurant = locate('.link-detail').first();
// const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
// console.log(firstRestaurantName);

// const likedRestaurantName = await I.grabTextFrom('.link-detail');
// console.log(likedRestaurantName);

// eslint-disable-next-line no-unused-vars
const START = 10;
// eslint-disable-next-line no-unused-vars
const NUMBER_OF_IMAGES = 100;

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.sidebar'),
  content: document.querySelector('#restaurant'),
  close: document.querySelector('#closeSidebar'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
