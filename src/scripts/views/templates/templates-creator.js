import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<img class="img__res" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}">
<div class="restaurant-name">${restaurant.name}</div>
<p class="restaurant-rating">Rating : ${restaurant.rating}</p>
<p class="city__res"> ${restaurant.city}</p>
<p class="restaurant-address">${restaurant.address}</p>
<p class="restaurant-description">${restaurant.description}</p>

  <div class="menu-list">
    <p><strong>Foods:</strong></p>
    <ul>
      ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
    </ul>
  </div>
  <div class="drink-list">
    <p><strong>Drinks:</strong></p>
    <ul>
      ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
    </ul>
  </div>
<div class="customer-reviews">
  <p><strong>Customer Reviews:</strong></p>
  <div class="review">
    ${restaurant.customerReviews.map((review) => `
      <p><strong>${review.name}</strong></p>
      <p class="coment">${review.review}</p>
      <p class="date">${review.date}</p>
    `).join('')}
  </div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<article class="card-resto">
<img class="thumbnail" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}">
<div class="ratingKota">
   <span class="rating">Rating ${restaurant.rating}</span>
   <span class="kota">${restaurant.city}</span>
</div>
<h3 class="nama__restaurant">${restaurant.name}</h3>
<p class="deskripsi__resto">${restaurant.description}</p>

<a class="link-detail" href="#/detail/${restaurant.id}">Details</a>
</article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
