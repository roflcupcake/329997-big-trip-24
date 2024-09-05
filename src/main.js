import { render, RenderPosition } from './render.js';
import FilterView from './view/filter-view.js';
import TripInfo from './view/trip-info-view.js';
import BoardPresenter from './presenter/list-presenter.js';
import PointsModel from './model/points-model.js';

const tripHeaderContainer = document.querySelector('.trip-main');
const tripFilterContainer = tripHeaderContainer.querySelector('.trip-controls__filters');

const pageMainContainer = document.querySelector('.page-main');
const tripEventsContainer = pageMainContainer.querySelector('.trip-events');

const priceContainer = document.querySelector('.event__price');

const pointsModel = new PointsModel();
const boardPresenter = new BoardPresenter({pointsContainer: tripEventsContainer, pointsModel, offersContainer: priceContainer});

render(new FilterView(), tripFilterContainer);
render(new TripInfo(), tripHeaderContainer, RenderPosition.AFTERBEGIN);
boardPresenter.init();
