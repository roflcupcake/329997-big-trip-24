import AbstractView from '../framework/view/abstract-view.js';
import { POINT_TYPES } from '../const.js';
import { capitalizeString, getFormattedTimeFromNewPointDate } from '../utils.js';

const createTypesTemplate = (types) => (
  types.map((element) => (
    `<div class="event__type-item">
        <input id="event-type-${element}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value=${element}>
        <label class="event__type-label  event__type-label--${element}" for="event-type-${element}-1">${capitalizeString(element)}</label>
      </div>`
  )).join('')
);

const createOffersTemplate = (offers, offersList) => {
  if (offersList.length < 1) {
    return '';
  }
  return (
    `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
      ${offersList.map((element) =>
      `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${element.name}-${element.id}" type="checkbox" name="event-offer-${element.name}" ${offers.includes(element.id) ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer-${element.name}-${element.id}">
        <span class="event__offer-title">${element.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${element.price}</span>
        </label>
      </div>`).join('')}
      </section>`
  );
};

const createDestinationOptionsTemplate = (destinations) => {
  const destinationsList = destinations.map((destination) => destination['name']);
  return (
    destinationsList.map((element) =>
      `<option value=${element}></option>`
    ).join('')
  );
};

const createDestinationPhotoTemplate = (destination) => {
  const destinationPictures = destination.pictures;
  return (
    destinationPictures.map((element) =>
      `<img class="event__photo" src="${element.src}" alt="${element.description}"></img>`
    ).join(''));
};

const createDestinationTemplate = (destination) => {
  if (destination === '') {
    return '';
  }
  return (
    `<section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${destination.description}</p>
        <div class="event__photos-container">
          <div class="event__photos-tape">
          ${createDestinationPhotoTemplate(destination)}
          </div>
        </div>
      </section>`
  );
};

const createEditPointTemplate = (point, destinations, isNewPoint) => {
  const { basePrice, dateFrom, dateTo, type, offersList, offers, destination } = point;
  const offersTemplate = createOffersTemplate(offers, offersList);
  const typesTemplate = createTypesTemplate(POINT_TYPES);
  const destinationsOptionsTemplate = createDestinationOptionsTemplate(destinations);
  const destinationInfoTemplate = createDestinationTemplate(destination);

  return (
    `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
    <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
        ${typesTemplate}
        </fieldset>
      </div>
    </div>
    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${capitalizeString(type)}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${(destination) ? destination.name : ''}" list="destination-list-1">
      <datalist id="destination-list-1">
        ${destinationsOptionsTemplate}
      </datalist>
    </div>
    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${getFormattedTimeFromNewPointDate(dateFrom)}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${getFormattedTimeFromNewPointDate(dateTo)}">
    </div>
    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
    </div>
    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    ${isNewPoint ?
      '<button class="event__reset-btn" type="reset">Cancel</button>' :
      `<button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
      </button>`}
  </header>
  <section class="event__details">
    ${offersTemplate}
    ${destinationInfoTemplate}
  </section>
</form>
</li>`
  );
};

export default class EditPointView extends AbstractView {
  #point = null;
  #destinations = null;
  #isNewPoint = null;

  constructor({ point, destinations }) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#isNewPoint = !this.#point.id;
  }

  get template() {
    return createEditPointTemplate(this.#point, this.#destinations, this.#isNewPoint);
  }
}
