import { sortByDistanceHelper, sortByNameHelper } from './helpers';

describe('Server list sort functions', () => {
  // sortByDistanceHelper
  describe('sortByDistanceHelper', () => {
    let data = [
      { name: 'eee', distance: 1 },
      { name: 'mla', distance: 10 },
      { name: 'abd', distance: 15 },
      { name: 'cde', distance: 20 },
      { name: 'hef', distance: 26 },
    ];

    test('should sort correctly by distance `ascending', () => {
      const result = [
        {
          name: 'eee',
          distance: 1,
        },
        { name: 'mla', distance: 10 },
        { name: 'abd', distance: 15 },
        { name: 'cde', distance: 20 },
        { name: 'hef', distance: 26 },
      ];

      const sorted = sortByDistanceHelper(data, 'asc', 'asc');
      expect(sorted).toEqual(result);
    });

    test('should sort correctly by distance `descending', () => {
      const result = [
        { name: 'hef', distance: 26 },
        { name: 'cde', distance: 20 },
        { name: 'abd', distance: 15 },
        { name: 'mla', distance: 10 },
        { name: 'eee', distance: 1 },
      ];

      const sorted = sortByDistanceHelper(data, 'asc', 'desc');
      expect(sorted).toEqual(result);
    });

    test('should sort correctly by ascending name if distances are equal', () => {
      data = [
        { name: 'eee', distance: 10 },
        { name: 'mla', distance: 10 },
        { name: 'abd', distance: 10 },
        { name: 'cde', distance: 10 },
        { name: 'hef', distance: 10 },
      ];

      const result = [
        { name: 'abd', distance: 10 },
        { name: 'cde', distance: 10 },
        { name: 'eee', distance: 10 },
        { name: 'hef', distance: 10 },
        { name: 'mla', distance: 10 },
      ];

      const sorted = sortByDistanceHelper(data, 'asc', 'desc');
      expect(sorted).toEqual(result);
    });

    test('should sort correctly by descending name if distances are equal', () => {
      data = [
        { name: 'eee', distance: 10 },
        { name: 'mla', distance: 10 },
        { name: 'abd', distance: 10 },
        { name: 'cde', distance: 10 },
        { name: 'hef', distance: 10 },
      ];

      const result = [
        { name: 'abd', distance: 10 },
        { name: 'cde', distance: 10 },
        { name: 'eee', distance: 10 },
        { name: 'hef', distance: 10 },
        { name: 'mla', distance: 10 },
      ].reverse();

      const sorted = sortByDistanceHelper(data, 'desc', 'asc');
      expect(sorted).toEqual(result);
    });
  });

  // sortByNameHelper
  describe('sortByNameHelper', () => {
    let data = [
      { name: 'eee', distance: 1 },
      { name: 'mla', distance: 10 },
      { name: 'abd', distance: 15 },
      { name: 'cde', distance: 20 },
      { name: 'hef', distance: 26 },
    ];

    test('should sort correctly by name ascending order', () => {
      const result = [
        { name: 'abd', distance: 15 },
        { name: 'cde', distance: 20 },
        { name: 'eee', distance: 1 },
        { name: 'hef', distance: 26 },
        { name: 'mla', distance: 10 },
      ];

      const sorted = sortByNameHelper(data, 'asc', 'asc');
      expect(sorted).toEqual(result);
    });

    test('should sort correctly by name descending order', () => {
      const result = [
        { name: 'mla', distance: 10 },
        { name: 'hef', distance: 26 },
        { name: 'eee', distance: 1 },
        { name: 'cde', distance: 20 },
        { name: 'abd', distance: 15 },
      ];

      const sorted = sortByNameHelper(data, 'desc', 'desc');
      expect(sorted).toEqual(result);
    });

    test('should sort correctly by ascending distance if names are equal', () => {
      data = [
        { name: 'eee', distance: 105 },
        { name: 'eee', distance: 10 },
        { name: 'eee', distance: 18 },
        { name: 'eee', distance: 65 },
        { name: 'eee', distance: 34 },
      ];

      const result = [
        { name: 'eee', distance: 10 },
        { name: 'eee', distance: 18 },
        { name: 'eee', distance: 34 },
        { name: 'eee', distance: 65 },
        { name: 'eee', distance: 105 },
      ];

      const sorted = sortByNameHelper(data, 'asc', 'desc');
      expect(sorted).toEqual(result);
    });

    test('should sort correctly by descending distance if names are equal', () => {
      data = [
        { name: 'eee', distance: 105 },
        { name: 'eee', distance: 10 },
        { name: 'eee', distance: 18 },
        { name: 'eee', distance: 65 },
        { name: 'eee', distance: 34 },
      ];

      const result = [
        { name: 'eee', distance: 10 },
        { name: 'eee', distance: 18 },
        { name: 'eee', distance: 34 },
        { name: 'eee', distance: 65 },
        { name: 'eee', distance: 105 },
      ].reverse();

      const sorted = sortByNameHelper(data, 'desc', 'desc');
      expect(sorted).toEqual(result);
    });
  });
});
