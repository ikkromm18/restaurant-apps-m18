// eslint-disable-next-line import/no-unresolved
import FavoriteRestaurantIdb from '../../data/favorite-restaurant';
// import { createRestaurantItemTemplate } from '../templates/templates-creator';
import FavoriteRestaurantView from './liked-restaurant/favorite-restaurant-view';
import FavoriteRestaurantShowPresenter from './liked-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurant/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    const hero = document.querySelector('.hero');
    hero.style.display = 'none';
    const input = document.querySelector('#query');
    input.style.display = '';
    // eslint-disable-next-line no-new
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    // eslint-disable-next-line no-new
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

// const Favorite = {
//   async render() {
//     return `
//     `;
//   },

//   async afterRender() {
//     const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
//     const restaurantContainer = document.getElementById('restaurant');
//     const hero = document.querySelector('.hero');
//     hero.style.display = 'none';

//     restaurants.forEach((restaurant) => {
//       restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
//     });
//   },
// };

export default Favorite;
