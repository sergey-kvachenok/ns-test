// constants
import { ORDER } from '../../constants';
import { OrderType, ServerType } from '../../types/login.types';

export const sortByNameHelper = (data: ServerType[], distanceOrder: OrderType, newOrder: OrderType) => {
  let currentData = [...data];

  currentData.sort((s1: ServerType, s2: ServerType) => {
    if (s1.name.localeCompare(s2.name) === 0) {
      if (distanceOrder === ORDER.asc) return s1.distance > s2.distance ? 1 : -1;
      if (distanceOrder === ORDER.desc) return s1.distance < s2.distance ? 1 : -1;
      return s1.distance - s2.distance;
    } else {
      if (newOrder === ORDER.asc) return s1.name.localeCompare(s2.name) > 0 ? 1 : -1;
      if (newOrder === ORDER.desc) return s1.name.localeCompare(s2.name) < 0 ? 1 : -1;
      return 0;
    }
  });

  return currentData;
};

export const sortByDistanceHelper = (data: ServerType[], nameOrder: OrderType, newOrder: OrderType) => {
  let currentData = [...data];

  currentData.sort((s1: ServerType, s2: ServerType) => {
    if (s1.distance === s2.distance) {
      if (nameOrder === ORDER.asc) return s1.name.localeCompare(s2.name) > 0 ? 1 : -1;
      if (nameOrder === ORDER.desc) return s1.name.localeCompare(s2.name) < 0 ? 1 : -1;
      return s1.name.localeCompare(s2.name);
    } else {
      if (newOrder === ORDER.asc) return s1.distance > s2.distance ? 1 : -1;
      if (newOrder === ORDER.desc) return s1.distance < s2.distance ? 1 : -1;
      return 0;
    }
  });

  return currentData;
};
