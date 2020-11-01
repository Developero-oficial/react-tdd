import React from 'react';
import { render, screen } from '@testing-library/react';

import HelloWorld from './hello-world';

test('renders hello world', () => {
  render(<HelloWorld />);

  const title = screen.getByText(/hello world/i);
  expect(title).toBeInTheDocument();
});
