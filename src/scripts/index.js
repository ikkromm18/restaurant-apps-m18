/* eslint-disable no-console */
/* eslint-disable no-undef */
import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.sidebar'),
  content: document.querySelector('#restaurant'),
  close: document.querySelector('#closeSidebar'),
});

// document.addEventListener('DOMContentLoaded', () => {
// const hamburgerButton = document.querySelector('#hamburger');
// const closeSidebar = document.querySelector('#closeSidebar');
// const sidebar = document.querySelector('.sidebar');

//   hamburgerButton.addEventListener('click', () => {
//     sidebar.style.display = 'flex';
//   });

//   closeSidebar.addEventListener('click', () => {
//     sidebar.style.display = 'none';
//   });

//   const restaurantList = document.getElementById('restaurant');
//   const exploreRestaurant = 'https://restaurant-api.dicoding.dev/list';

//   fetch(exploreRestaurant)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const { restaurants } = data;
//       let output = '';
//       // eslint-disable-next-line no-restricted-syntax
//       for (const restaurant of restaurants) {
//         output += `
//                   <article class="card-resto">
//                       <img class="thumbnail" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}">
//                       <div class="ratingKota">
//                          <span class="rating">Rating ${restaurant.rating}</span>
//                          <span class="kota">${restaurant.city}</span>
//                       </div>
//                       <h3 class="nama__restaurant">${restaurant.name}</h3>
//                       <p class="deskripsi__resto">${restaurant.description}</p>

// eslint-disable-next-line max-len
//                       <a class="link-detail" href="restaurant-detail.html?id=${restaurant.id}">Details</a>
//                   </article>
//               `;
//       }
//       restaurantList.innerHTML = output;
//     })
//     .catch((error) => {
//       console.log(error);
//       notifyUserOfError(error);
//       reportErrorToService(error);
//     });
// });
