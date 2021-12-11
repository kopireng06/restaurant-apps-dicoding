import DicodingRestaurant from '../../data/restaurant-dicoding-api';
import { createCardRestaurant } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <figure class="jumbotron">
            <picture>
              <source media="(max-width: 600px)" srcset="images/heros/hero-image_4_small.jpg">
              <img class="img-jumbotron" src="images/heros/hero-image_4.jpg" alt="tombo luwe picture">
            </picture>
            <div class="bg-jumbotron"></div>
            <h1 class="nunito-font">Quickest Solution When Your Hungry</h1>
        </figure>
        <main id="maincontent" class="list-restaurant container">
            <h2 class="nunito-font">List Restaurant</h2>
        </main>
    `;
  },

  async afterRender() {
    const { restaurants } = await DicodingRestaurant.listRestaurant();
    const restaurantContainer = document.querySelector('.list-restaurant');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createCardRestaurant(restaurant);
    });
  },
};

export default Home;
