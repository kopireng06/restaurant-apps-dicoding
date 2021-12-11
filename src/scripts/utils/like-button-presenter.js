import { createAddFavoritesButton, createRemoveFavoritesButton } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonWrapper, favoriteRestaurant, restaurant }) {
    this._likeButtonWrapper = likeButtonWrapper;
    this._restaurant = restaurant;
    this._favoriteRestaurant = favoriteRestaurant;

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
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonWrapper.innerHTML = createAddFavoritesButton();
    const likeButton = document.querySelector('.btn-add-favorites');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonWrapper.innerHTML = createRemoveFavoritesButton();

    const likeButton = document.querySelector('.btn-remove-favorites');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
