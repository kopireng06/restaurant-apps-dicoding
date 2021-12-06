import Home from '../views/pages/home';
import DetailRestaurant from '../views/pages/detail';
import Favorites from '../views/pages/favorites';

const routes = {
  '/': Home, // default page
  '/detail/:id': DetailRestaurant,
  '/favorites': Favorites,
};

export default routes;
