const API_ENDPOINT = 'https://restaurant-api.dicoding.dev';

class DicodingRestaurant {
  static async listRestaurant() {
    const response = await fetch(`${API_ENDPOINT}/list`);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailRestaurant(id) {
    const response = await fetch(`${API_ENDPOINT}/detail/${id}`);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default DicodingRestaurant;
