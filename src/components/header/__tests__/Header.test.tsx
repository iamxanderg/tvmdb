/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import Header from '../Header';

const onSearch = vi.fn();

afterEach(() => {
  cleanup();
});

describe('Testing <Home />', () => {
  test('should render home component', async () => {
    render(<Header title='TV & Movie Browser' onSearch={(query) => onSearch(query)} />);
    expect(screen.getByText(/TV & Movie Browser/i));
  });

  test('should render with search component', async () => {
    render(<Header title='TV & Movie Browser' onSearch={(query) => onSearch(query)} />);
    expect(screen.getByPlaceholderText(/Search TV shows/i));
  });
});
