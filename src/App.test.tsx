import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './_app';

describe('App', () => {
  it('renders app', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      }).textContent
    ).toBe('Hello world');
  });
});
