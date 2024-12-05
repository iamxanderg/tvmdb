/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import Search from '../Search';

const onSearch = vi.fn();

afterEach(() => {
  cleanup();
});

describe('Testing search features', () => {
  test('should render placeholder text', async () => {
    render(<Search placeholderText='Search TV shows' onSearch={(query) => onSearch(query)} />);
    expect(screen.getByPlaceholderText(/Search TV shows/i));
  });

  test('should render data-testid tag', async () => {
    render(
      <Search
        placeholderText='Search TV shows'
        onSearch={(query) => onSearch(query)}
        dataTestId='search-input-testid'
      />
    );
    expect(screen.getByTestId('search-input-testid'));
  });

  test('should render a button with text', async () => {
    render(<Search placeholderText='Search TV shows' onSearch={(query) => onSearch(query)} />);
    expect(screen.getByRole('button', { name: /Search/i }));
  });
});
