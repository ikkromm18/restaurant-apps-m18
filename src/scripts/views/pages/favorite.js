// eslint-disable-next-line import/no-unresolved
import FavoriteRestaurantIdb from '../../data/favorite-restaurant';
import { createRestaurantItemTemplate } from '../templates/templates-creator';

const Favorite = {
  async render() {
    return `
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.getElementById('restaurant');
    const hero = document.querySelector('.hero');
    hero.style.display = 'none';

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
