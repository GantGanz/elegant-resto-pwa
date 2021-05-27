/* eslint-disable no-plusplus */
import CONFIG from '../../globals/config';

function arrayRenderer(array) {
  return array.map((object) => object.name).join(' - ');
}
function arraysRenderer(arrays) {
  let html = '';
  for (let i = 0; i < arrays.length; i++) {
    html += `
    <p><strong>Name</strong>: ${arrays[i].name} (${arrays[i].date})</p>
    <p>Review: ${arrays[i].review}</p>
    <hr>
    `;
  }
  return html;
}

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail-class">
  <h2 class="restaurant__title">${restaurant.restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId}" alt="${restaurant.restaurant.name}" />
  <div class="restaurant__info">
    <h4>City</h4>
    <p>${restaurant.restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.restaurant.rating}</p>
    <h4>Categories</h4>
    <p><span id="category">${arrayRenderer(restaurant.restaurant.categories)}</span></p>
  </div>
  <div class="restaurant__overview">
    <hr>
    <h3>Foods</h3>
    <p><span id="food">${arrayRenderer(restaurant.restaurant.menus.foods)}</span></p>
    <h3>Drinks</h3>
    <p><span id="drink">${arrayRenderer(restaurant.restaurant.menus.drinks)}</span></p>
    <h3>Description</h3>
    <p>${restaurant.restaurant.description}</p>
    <hr>
    <h3 class="reviews-title">Customer Reviews</h3>
    <hr>
    ${arraysRenderer(restaurant.restaurant.customerReviews)}
  </div>
</div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster" alt="${restaurant.name}"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <h4>City: ${restaurant.city}</h4>
        <p>${restaurant.description}</p>
    </div>
  </div>
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
