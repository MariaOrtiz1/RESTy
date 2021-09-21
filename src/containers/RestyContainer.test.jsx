import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import RESTyContainer from './RestyContainer';

const mockServer = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers', (req, res, ctx) => {
    return res(
      ctx.json(
        [
          {
            id: '5f5fb4bbbfd05c2aed8e474',
            name: 'Aurora',
            image: 'example.com/image.png',
            species: 'penguin',
            personality: 'normal',
            quote: 'Always keep your cool.',
          }
        ]
      )
    );
  })
);

describe('RESTycontainer', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());

  // eslint-disable-next-line max-len
  it('should display a controls section and a display section', async () => {
    render(<RESTyContainer />);
    const URLinput = await screen.findByPlaceholderText('https://');
    userEvent.type(
      URLinput,
      '{selectall}{del}https://ac-vill.herokuapp.com/villagers'
    );

    const methodSelection = await screen.findByText('GET');
    userEvent.click(methodSelection);

    const requestButton = await screen.findByRole('button', {
      name: 'submit-button',
    });
    userEvent.click(requestButton);

    return waitFor(() => {
      // eslint-disable-next-line max-len
      const response = screen.getByRole('article', { name: 'display-response' });

      expect(response).toMatchSnapshot();
    }, { timeout: 2000 });
  });
});
