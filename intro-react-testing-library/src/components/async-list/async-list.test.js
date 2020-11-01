import React from 'react';
import { render, screen } from '@testing-library/react';

import AsyncList from './async-list';

test('show the food data', async () => {
  render(<AsyncList />);

  const hamburguer = await screen.findByText(/hamburger/i);

  expect(hamburguer).toBeInTheDocument();

  expect(await screen.findByText(/pizza/i)).toBeInTheDocument();
  expect(await screen.findByText(/tacos/i)).toBeInTheDocument();
});
