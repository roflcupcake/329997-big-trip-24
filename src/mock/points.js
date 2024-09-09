import { getRandomArrayElement } from '../utils.js';

const mockPoints = [
  {
    'id': '1',
    'basePrice': 100,
    'dateFrom': new Date(2024, 0, 1, 20, 22, 22).toISOString(),
    'dateTo': new Date(2024, 0, 2, 11, 32, 0).toISOString(),
    'destination': '1',
    'isFavorite': false,
    'offers': ['1', '2'],
    'type': 'taxi'
  },
  {
    'id': '2',
    'basePrice': 200,
    'dateFrom': new Date(2024, 2, 3, 10, 20, 0).toISOString(),
    'dateTo': new Date(2024, 2, 4, 12, 12, 0).toISOString(),
    'destination': '2',
    'isFavorite': true,
    'offers': [],
    'type': 'bus'
  },
  {
    'id': '3',
    'basePrice': 300,
    'dateFrom': new Date(2024, 4, 5, 10, 30, 0).toISOString(),
    'dateTo': new Date(2024, 4, 6, 13, 10, 0).toISOString(),
    'destination': '3',
    'isFavorite': false,
    'offers': ['2'],
    'type': 'train'
  },
  {
    'id': '4',
    'basePrice': 400,
    'dateFrom': new Date(2024, 6, 7, 10, 40, 0).toISOString(),
    'dateTo': new Date(2024, 6, 8, 14, 40, 0).toISOString(),
    'destination': '4',
    'isFavorite': true,
    'offers': ['1'],
    'type': 'ship'
  },
  {
    'id': '5',
    'basePrice': 400,
    'dateFrom': new Date(2024, 6, 7, 10, 40, 0).toISOString(),
    'dateTo': new Date(2024, 6, 8, 14, 40, 0).toISOString(),
    'destination': '5',
    'isFavorite': false,
    'offers': ['2'],
    'type': 'drive'
  },
  {
    'id': '6',
    'basePrice': 400,
    'dateFrom': new Date(2024, 6, 7, 10, 40, 0).toISOString(),
    'dateTo': new Date(2024, 6, 8, 14, 40, 0).toISOString(),
    'destination': '6',
    'isFavorite': false,
    'offers': ['1', '3'],
    'type': 'flight'
  },
  {
    'id': '7',
    'basePrice': 400,
    'dateFrom': new Date(2024, 6, 7, 10, 40, 0).toISOString(),
    'dateTo': new Date(2024, 6, 8, 14, 40, 0).toISOString(),
    'destination': '7',
    'isFavorite': true,
    'offers': ['1'],
    'type': 'check-in'
  },
  {
    'id': '8',
    'basePrice': 400,
    'dateFrom': new Date(2024, 6, 7, 10, 40, 0).toISOString(),
    'dateTo': new Date(2024, 6, 8, 14, 40, 0).toISOString(),
    'destination': '8',
    'isFavorite': false,
    'offers': ['1'],
    'type': 'sightseeing'
  },
  {
    'id': '9',
    'basePrice': 400,
    'dateFrom': new Date(2024, 6, 7, 10, 40, 0).toISOString(),
    'dateTo': new Date(2024, 6, 8, 14, 40, 0).toISOString(),
    'destination': '9',
    'isFavorite': true,
    'offers': ['1', '2'],
    'type': 'restaurant'
  },
];

const blankPoint =
  {
    'id': '1',
    'basePrice': 0,
    'dateFrom': new Date().toISOString(),
    'dateTo': new Date().toISOString(),
    'destination': '',
    'isFavorite': false,
    'offers': [],
    'type': 'flight'
  };

const getMockPoint = () => getRandomArrayElement(mockPoints);
const getDefaultBlankPoint = () => blankPoint;

export { getMockPoint, getDefaultBlankPoint };
