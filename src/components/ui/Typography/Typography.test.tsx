import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Typography } from './Typography';

afterEach(() => {
  cleanup();
})

test('Typography should render by default', () => {
  render(<Typography>Hello World</Typography>);
  const t = screen.getByText(/Hello World/i);
  expect(t).toContainHTML( '</span>' );
  expect(t).toHaveClass( 'grey' );
  expect(t).toHaveClass( 'bodyMedium' );
  expect(t).toHaveClass( 'bodyMedium' );
});

test('Typography should render the text', () => {
  render(<Typography display="block" variant="heading3" color="greyLight">Hello World</Typography>);
  const t = screen.getByText(/Hello World/i);
  expect(t).toBeInTheDocument();
  expect(t).toContainHTML( '</h3>' );
  expect(t).toHaveClass( 'greyLight' );
  expect(t).toHaveClass( 'block' );
});

test('Typography matches snapshot', () => {
  const t = renderer.create(<Typography>Hello World</Typography>).toJSON();
  expect(t).toMatchSnapshot();
});
