import { createElement } from '../render.js';
import { capitalizeString } from '../utils.js';

const createPointTemplate = (point) => {
  const {
    base_price: basePrice,
    date_from: dateFrom,
    date_to: dateTo,
    destination: {
      name,
    },
    is_favorite: isFavorite,
    type
  } = point;
  return (
    `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="2019-03-18">${dateFrom}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${capitalizeString(type)}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${capitalizeString(type)} ${capitalizeString(name)}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="2019-03-18T10:30">${dateFrom}</time>
                    &mdash;
                    <time class="event__end-time" datetime="2019-03-18T11:00">${dateTo}</time>
                  </p>
                  <p class="event__duration">${soon}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
                </p>


                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  <li class="event__offer">
                    <span class="event__offer-title">Order Uber</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">20</span>
                  </li>
                </ul>


                <button class="event__favorite-btn event__favorite-btn--${isFavorite ? 'active' : ''}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
    </li>`
  );
};

export default class PointView {
  getTemplate() {
    return createPointTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
