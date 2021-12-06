import UrlParser from '../../routes/url-parser';
import DicodingRestaurant from '../../data/restaurant-dicoding-api';
import { createDetailRestaurant } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import AddReviewInitiator from '../../utils/add-review-initiator';

const DetailRestaurant = {
  async render() {
    return `
        <div class="bg-orange" style="height:85px;"></div>
        <main id="maincontent" class="detail-restaurant container">
            <h2 class="nunito-font">List Restaurant</h2>
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
    AddReviewInitiator.init({
      id: url.id,
      submitReview,
      wrapperReview,
      nameInput,
      reviewInput,
      countReview,
    });
    LikeButtonInitiator.init({
      likeButtonWrapper: wrapperButtonFavorites,
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
