const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#title-list-restaurant');
  I.see('there is no restaurant that you like', '.restaurant-item__not__found');
});

Scenario('like one restaurant', async ({ I }) => {
  I.see('there is no restaurant that you like', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.card-restaurant');

  const firstRestaurant = locate('.card-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('.btn-add-favorites');
  I.click('.btn-add-favorites');

  I.amOnPage('/#/favorites');
  I.seeElement('.card-title');
  const likedRestaurantTitle = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unlike one restaurant', async ({ I }) => {
  I.see('there is no restaurant that you like', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.card-restaurant');

  const firstRestaurant = locate('.card-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('.btn-add-favorites');
  I.click('.btn-add-favorites');

  I.amOnPage('/#/favorites');
  I.seeElement('.card-title');
  const likedRestaurantTitle = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click('.card-title');
  I.see('Remove from favorites', '.btn-remove-favorites');
  I.click('.btn-remove-favorites');

  I.amOnPage('/#/favorites');

  I.see('there is no restaurant that you like', '.restaurant-item__not__found');
});
