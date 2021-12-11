import UrlParser from '../../routes/url-parser';
import DicodingRestaurant from '../../data/restaurant-dicoding-api';
import { createDetailRestaurant } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import AddReviewInitiator from '../../utils/add-review-initiator';
import FavoriteRestaurant from '../../data/indexed-db';

const DetailRestaurant = {
  async render() {
    return `
        <div class="bg-orange" style="height:85px;"></div>
        <main id="maincontent" tabindex="0" class="detail-restaurant container">
            <h2 id="title-list-restaurant" class="nunito-font">List Restaurant</h2>
        </main>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await DicodingRestaurant.detailRestaurant(url.id);
    const { restaurants } = await DicodingRestaurant.listRestaurant();
    const detailContainer = document.querySelector('#maincontent');
    detailContainer.innerHTML = createDetailRestaurant(restaurant, restaurants);
    const wrapperButtonFavorites = document.querySelector('#wrapper-button-favorites');
    const submitReview = document.querySelector('#submit-review');
    const wrapperReview = document.querySelector('.wrapper-review');
    const nameInput = document.querySelector('#name');
    const reviewInput = document.querySelector('#review');
    const countReview = document.querySelector('#count-review');
    const skipLinkElem = document.querySelector('.skip-link');
    const mainContent = document.querySelector('#maincontent');
    skipLinkElem.addEventListener('click', (e) => {
      e.preventDefault();
      mainContent.focus();
    });
    AddReviewInitiator.init({
      id: url.id,
      submitReview,
      wrapperReview,
      nameInput,
      reviewInput,
      countReview,
    });
    LikeButtonPresenter.init({
      likeButtonWrapper: wrapperButtonFavorites,
      favoriteRestaurant: FavoriteRestaurant,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default DetailRestaurant;
