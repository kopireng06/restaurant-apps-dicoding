import FavoriteRestaurant from '../data/indexed-db';
import { createAddFavoritesButton, createRemoveFavoritesButton } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonWrapper, restaurant }) {
    this._likeButtonWrapper = likeButtonWrapper;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonWrapper.innerHTML = createAddFavoritesButton();
    const likeButton = document.querySelector('.btn-add-favorites');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonWrapper.innerHTML = createRemoveFavoritesButton();

    const likeButton = document.querySelector('.btn-remove-favorites');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
