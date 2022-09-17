// libraries
import { fireEvent, screen } from '@testing-library/react';
// components
import ServerList from '.';
// utils
import renderWithProviders from '../../testUtils';

describe('ServersList', () => {
  const data = [
    {
      name: 'Server A',
      distance: 100,
    },
    {
      name: 'Server B',
      distance: 200,
    },
  ];

  const setData = jest.fn();
  afterEach(jest.clearAllMocks);

  it('should sort by distance', async () => {
    renderWithProviders(<ServerList data={data} setData={setData} />);

    const distanceSortLabel = screen.getByTestId('distance-column-label');

    fireEvent.click(distanceSortLabel);
    expect(setData).toHaveBeenCalledWith([
      { name: 'Server B', distance: 200 },
      { name: 'Server A', distance: 100 },
    ]);

    fireEvent.click(distanceSortLabel);

    expect(setData).toHaveBeenCalledWith([
      { name: 'Server A', distance: 100 },
      { name: 'Server B', distance: 200 },
    ]);
  });

  it('should sort by name', async () => {
    renderWithProviders(<ServerList data={data} setData={setData} />);

    const nameSortLabel = screen.getByTestId('server-column-label');

    fireEvent.click(nameSortLabel);

    expect(setData).toHaveBeenCalledWith([
      { distance: 200, name: 'Server B' },
      { distance: 100, name: 'Server A' },
    ]);

    fireEvent.click(nameSortLabel);

    expect(setData).toHaveBeenCalledWith([
      { distance: 100, name: 'Server A' },
      { distance: 200, name: 'Server B' },
    ]);
  });
});
