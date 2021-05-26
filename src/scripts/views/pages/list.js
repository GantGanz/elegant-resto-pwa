/* eslint-disable no-console */
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const List = {
  async render() {
    return `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">Elegant Restaurant Reviews</h1>
          <p class="hero__tagline">Review singkat dari berbagai macam restaurant yang ada di seluruh Indonesia</p>
        </div>
      </div>
      <div class="content">
        <h2 class="content__heading">List of Restaurants</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default List;
