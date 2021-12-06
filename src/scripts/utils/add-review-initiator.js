const AddReviewInitiator = {
  async init({
    id, submitReview, wrapperReview, nameInput, reviewInput, countReview,
  }) {
    this._id = id;
    this._submitReview = submitReview;
    this._wrapperReview = wrapperReview;
    this._nameInput = nameInput;
    this._reviewInput = reviewInput;
    this._countReview = countReview;
    this._addClickListener();
  },

  _addClickListener() {
    this._submitReview.addEventListener('click', async (e) => {
      e.preventDefault();
      const requestData = {
        id: this._id,
        name: this._nameInput.value,
        review: this._reviewInput.value,
      };

      if (requestData) {
        const responseJson = await this._postReview(requestData);
        this._addReview(responseJson);
      }
    });
  },

  _validateForm() {
    if (this._nameInput.value && this._reviewInput.value) {
      return {
        id: this._id,
        name: this._nameInput.value,
        review: this._reviewInput.value,
      };
    }
    return null;
  },

  async _postReview(request) {
    const response = await fetch('https://restaurant-api.dicoding.dev/review', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });
    const responseJson = await response.json();
    return responseJson;
  },

  _addReview(responseReview) {
    const addedReview = responseReview.customerReviews[responseReview.customerReviews.length - 1];
    this._countReview.innerHTML = `(${responseReview.customerReviews.length})`;
    this._wrapperReview.innerHTML += `
            <div class="review">
                <b>${addedReview.name}</b><span>(${addedReview.date})</span>
                <p>
                ${addedReview.review}
                </p>
                <hr>
            </div>
        `;
  },
};

export default AddReviewInitiator;
