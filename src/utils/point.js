import dayjs from 'dayjs';
import { getTimeDeltaNotFormatted } from './utils';

const isFuturePoint = (dateFrom) => dateFrom && dayjs().isBefore(dateFrom, 'D');
const isPastPoint = (dateTo) => dateTo && dayjs().isAfter(dateTo, 'D');
const isPresentPoint = (dateFrom, dateTo) =>
  dateFrom &&
  dateTo &&
  (dayjs().isBefore(dateFrom, 'D') || dayjs().isSame(dateFrom, 'D')) &&
  (dayjs().isAfter(dateTo, 'D') || dayjs().isSame(dateTo, 'D'));

const getOffersByType = (allOffers, type) => allOffers.find((element) => element.type === type).offers;

const getOffers = (allOffers, offers, type) => {
  const offersByType = allOffers.find((element) => element.type === type).offers;
  return offers.map((offer) => offersByType.find((element) => element.id === offer));
};

const getDestination = (allDestinations, destination) => destination ? allDestinations.find((element) => element.id === destination) : '';

const getWeightForSortParameter = (parameterA, parameterB) => {
  if (parameterA === null && parameterB === null) {
    return 0;
  }
  if (parameterA > parameterB) {
    return 1;
  }
  if (parameterA < parameterB) {
    return -1;
  }
  return null;
};

const sortPointsByDate = (pointA, pointB) => {
  const weight = getWeightForSortParameter(dayjs(pointA.dateFrom), dayjs(pointB.dateFrom));
  return weight ?? dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));
};

const sortPointsByTime = (pointA, pointB) => {
  const timeDeltaA = getTimeDeltaNotFormatted(pointA.dateFrom, pointA.dateTo);
  const timeDeltaB = getTimeDeltaNotFormatted(pointB.dateFrom, pointB.dateTo);
  return timeDeltaA - timeDeltaB;
};

const sortPointsByPrice = (pointA, pointB) => {
  const weight = getWeightForSortParameter(pointA.basePrice, pointB.basePrice);
  return weight ?? dayjs(pointA.basePrice).diff(dayjs(pointB.basePrice));
};

const isDatesEqual = (dateA, dateB) => (dateA === null && dateB === null) || dayjs(dateA).isSame(dateB, 'D');

export { isFuturePoint, isPastPoint, isPresentPoint, sortPointsByDate, sortPointsByTime, sortPointsByPrice, getOffersByType, getOffers, getDestination, isDatesEqual };
