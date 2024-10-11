import { render } from './framework/render.js';
import ListPresenter from './presenter/list-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import NewPointButtonView from './view/new-point-button-view.js';
import PointsModel from './model/points-model.js';
import FiltersModel from './model/filters-model.js';
import PointsApiService from './points-api-service.js';

const AUTHORIZATION = 'Basic ee863jdfbdv';
const END_POINT = 'https://24.objects.htmlacademy.pro/big-trip';

const tripHeaderContainer = document.querySelector('.trip-main');
const tripFilterContainer = tripHeaderContainer.querySelector('.trip-controls__filters');
const pageMainContainer = document.querySelector('.page-main');
const tripEventsContainer = pageMainContainer.querySelector('.trip-events');

const pointsModel = new PointsModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION)
});
const filtersModel = new FiltersModel();

const listPresenter = new ListPresenter({
  pointsContainer: tripEventsContainer,
  pointsModel,
  filtersModel,
  headerContainer: tripHeaderContainer,
  onNewPointDestroy: handleNewPointFormClose,
});

const filterPresenter = new FilterPresenter({
  filterContainer: tripFilterContainer,
  filtersModel,
  pointsModel
});

const newPointButtonComponent = new NewPointButtonView({
  onClick: handleNewPointButtonClick
});

function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  listPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

filterPresenter.init();
listPresenter.init();
pointsModel.init()
  .finally(() => {
    render(newPointButtonComponent, tripHeaderContainer);
    if (pointsModel._failedOnLoad) {
      newPointButtonComponent.element.disabled = true;
    }
  });
