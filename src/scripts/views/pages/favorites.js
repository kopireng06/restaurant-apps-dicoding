import { createCardRestaurant } from '../templates/template-creator';
import FavoriteRestaurant from '../../data/indexed-db';

const Favorites = {
  async render() {
    return `
        <div class="bg-orange" style="height:85px;"></div>
        <main id="maincontent" tabindex="0" class="list-restaurant container">
            <h2 class="nunito-font">My Favorite Restaurants</h2>
        </main>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    const restaurantContainer = document.querySelector('.list-restaurant');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createCardRestaurant(restaurant);
    });
    const skipLinkElem = document.querySelector('.skip-link');
    const mainContent = document.querySelector('#maincontent');
    skipLinkElem.addEventListener('click', (e) => {
      e.preventDefault();
      mainContent.focus();
    });
  },
};

export default Favorites;
