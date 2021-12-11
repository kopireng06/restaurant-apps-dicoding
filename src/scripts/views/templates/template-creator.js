const createCardRestaurant = ({
  id, name, pictureId, city, rating,
}) => `
    <a href="#/detail/${id}" tabindex="0" id=${id} class="card-restaurant">
        <figure class="card-img">
            <img src="https://restaurant-api.dicoding.dev/images/small/${pictureId}" alt="${name}">
            <div class="flex card-location-wrapper">
                <span class="card-location rubik-font">
                    ${city}
                </span>
            </div>
        </figure>
        <div class="card-desc">
            <h3 class="nunito-font card-title">${name}</h2>
            <span class="rubik-font">⭐ (${rating})</span>
        </div>
    </a>
`;

const createDetailRestaurant = ({
  id, name, description, city, address, pictureId, categories, menus, rating, customerReviews,
}, restaurants) => `
    <div class="container" data-id="${id}">
        <div class="flex">
            <div class="wrapper-detail-img">
                <figure class="detail-img w-full">
                    <picture>
                      <source media="(max-width: 600px)" srcset="https://restaurant-api.dicoding.dev/images/small/${pictureId}">
                      <img class="h-full w-full object-cover" src="https://restaurant-api.dicoding.dev/images/medium/${pictureId}" alt="${name}">
                    </picture>
                </figure>
                <div id="wrapper-button-favorites"></div>
            </div>
            <div class="detail-content nunito-font">
                <h1>${name}</h1>
                <p>${city}, ${address}</p>
                <span>⭐ ${rating}</span>
                ${(() => categories.map(({ name }) => `<span class="detail-tag bg-orange">${name}</span>`).join(' '))()}
                <p>
                   ${description}
                </p>
                <div class="flex">
                    ${(() => {
    const resp = [];
    let index = 0;
    for (let i = 0; i < Math.ceil(menus.drinks.length / 7); i++) {
      if (index === 0) {
        resp.push('<ul class="list-menu">');
        resp.push('<b class="color-orange">Drinks</b>');
      } else {
        resp.push('<ul class="list-menu mt-22">');
      }
      for (let j = 0; i < 7; j++) {
        if (menus.drinks[index]) {
          resp.push(`<li><span class="color-orange">✔ </span>${menus.drinks[index].name}</li>`);
          index++;
        } else {
          break;
        }
      }
      resp.push('</ul>');
    }
    return resp.join('');
  })()}
                    ${(() => {
    const resp = [];
    let index = 0;
    for (let i = 0; i < Math.ceil(menus.foods.length / 7); i++) {
      if (index === 0) {
        resp.push('<ul class="list-menu">');
        resp.push('<b class="color-orange">Foods</b>');
      } else {
        resp.push('<ul class="list-menu mt-22">');
      }
      for (let k = 0; i < 7; k++) {
        if (menus.foods[index]) {
          resp.push(`<li><span class="color-orange">✔ </span>${menus.foods[index].name}</li>`);
          index++;
        } else {
          break;
        }
      }
      resp.push('</ul>');
    }
    return resp.join('');
  })()}
                </div>
            </div>
            <div class="wrapper-review nunito-font">
                <h3 style="margin-bottom: 20px;">Review <span id="count-review">(${customerReviews.length})</span></h3>
                ${
  (() => customerReviews.map(({ name, review, date }) => `
                            <div class="review">
                                <b>${name}</b><span>${date}</span>
                                <p>
                                   ${review}
                                </p>
                                <hr>
                            </div>
                        `).join(''))()
}

            </div>
            <div class="wrapper-send-review nunito-font">
                <h3 style="margin-bottom: 10px;">Send your review</h3>
                <form action="#">
                    <input id="name" type="text" name="name" placeholder="insert your name">
                    <textarea id="review" name="review" rows="4" placeholder="insert your review"></textarea>
                    <input id="submit-review" type="submit" class="bg-orange" >
                </form>
                <div class="list-other-restaurant">
                    <h3 style="margin-bottom: 10px;">Other restaurants</h3>
                    ${
  (() => {
    const listResto = [];
    for (let index = 0; index < 4; index++) {
      listResto.push(
        createCardRestaurant(restaurants[Math.floor(Math.random() * restaurants.length)]),
      );
    }
    return listResto.join('');
  })()
}
                </div>
            </div>
        </div>
    </div>
`;

const createAddFavoritesButton = () => `
    <button class="bg-orange btn-add-favorites">Add to favorites</button>
`;

const createRemoveFavoritesButton = () => `
    <button class="btn-remove-favorites">Remove from favorites</button>
`;

const createInformationEmptyFavoriteRestaurants = () => `
    <p class="restaurant-item__not__found">there is no restaurant that you like</p>
`;

export {
  createCardRestaurant,
  createDetailRestaurant,
  createAddFavoritesButton,
  createRemoveFavoritesButton,
  createInformationEmptyFavoriteRestaurants,
};
