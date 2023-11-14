import UrlParser from '../../routes/url-parser';
// eslint-disable-next-line import/no-unresolved, import/extensions
import RestaurantSources from '../../data/restaurant-sources';
import { createRestaurantDetailTemplate } from '../templates/templates-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="detail" class="detail"></div>
    <div id="likeButtonContainer" class="like"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSources.detailRestaurant(url.id);
    const hero = document.querySelector('.hero');
    hero.style.display = 'none';
    const restaurantContainer = document.querySelector('#detail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    // eslint-disable-next-line no-undef
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });
  },
};

export default Detail;
