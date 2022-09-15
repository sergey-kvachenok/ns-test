// libraries
import { render, fireEvent, screen } from '@testing-library/react';
// components
import Login from '.';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// utils
import renderWithProviders from '../../testUtils';
import * as serverApi from '../../store/queries/servers';

// jest.mock(serverApi, () => ({
//   re
// }));

describe('Ticket', () => {
  const requiredUsernameError = 'Please provide a user name. This field is mandatory';
  const requiredPasswordError = 'Please provide a password. This field is mandatory';

  // const mockedDispatch = jest.fn();

  // const state = {
  //   auth: {
  //     token: '',
  //   },
  // };

  // beforeEach(() => {
  //   useAppSelector.mockImplementation(callback => {
  //     return callback(state);
  //   });
  // });

  // afterEach(() => {
  //   useAppSelector.mockClear();
  // });
  it('should render buttons', async () => {
    renderWithProviders(<Login />);

    const cloneButton = screen.getByTestId('submit-login-button');
    fireEvent.click(cloneButton);

    const usernameError = await screen.findByText(requiredUsernameError);
    const passwordError = await screen.findByText(requiredPasswordError);

    expect(usernameError).toBeVisible();
    expect(passwordError).toBeVisible();
  });

  // it('should fire clone function when clone button is pressed', () => {
  //   render(<Ticket mode="light" cloneTicket={cloneTicket} hideTicket={(ticketId: string) => {}} ticket={ticket} />);

  //   const cloneButton = screen.getByTestId('clone-button');

  //   fireEvent.click(cloneButton);

  //   expect(cloneTicket).toHaveBeenCalledWith(ticket.id);
  // });

  // it('should fire hide function when hide button is pressed', () => {
  //   render(<Ticket mode="light" cloneTicket={cloneTicket} hideTicket={hideTicket} ticket={ticket} />);

  //   const ticketElem = screen.getByTestId('ticket');
  //   const hideButton = screen.getByTestId('hide-button');

  //   expect(ticketElem).not.toBeNull();

  //   fireEvent.click(hideButton);
  //   expect(hideTicket).toHaveBeenCalledWith(ticket.id);
  // });

  // it('should render the title, content, date', () => {
  //   const { title, creationTime, content } = ticket || {};
  //   render(<Ticket mode="light" cloneTicket={cloneTicket} hideTicket={hideTicket} ticket={ticket} />);

  //   expect(title).not.toBeNull();
  //   expect(creationTime).not.toBeNull();
  //   expect(content).not.toBeNull();
  // });
});
