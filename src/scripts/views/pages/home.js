import RestaurantSources from '../../data/restaurant-sources';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { createRestaurantItemTemplate } from '../templates/templates-creator';

const Home = {
  async render() {
    return `
    
    `;
  },

  async afterRender() {
    const hero = document.querySelector('.hero');
    hero.style.display = '';
    const input = document.querySelector('#query');
    input.style.display = 'none';
    const Restaurant = await RestaurantSources.home();
    // console.log(Restaurant);
    const restaurantList = document.getElementById('restaurant');
    Restaurant.forEach((restaurant) => {
      // eslint-disable-next-line no-undef
      restaurantList.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
