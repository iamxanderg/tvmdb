/**
 * @jest-environment jsdom
 */
import { renderHook, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { useFetch } from '../useFetch';

const mockedUrl = 'https://api.tvmaze.com/search/shows?q=stargate atlantis';
const mockedData = [
  {
    score: 1.2020117,
    show: {
      _links: {
        previousepisode: {
          href: 'https://api.tvmaze.com/episodes/13782',
          name: 'Enemy at the Gate',
        },
        self: {
          href: 'https://api.tvmaze.com/shows/206',
        },
      },
      averageRuntime: 60,
      dvdCountry: null,
      ended: '2009-01-09',
      externals: {
        imdb: 'tt0374455',
        thetvdb: 70851,
        tvrage: 5324,
      },
      genres: ['Action', 'Adventure', 'Science-Fiction'],
      id: 206,
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/498/1245482.jpg',
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/498/1245482.jpg',
      },
      language: 'English',
      name: 'Stargate Atlantis',
      network: {
        country: {
          code: 'US',
          name: 'United States',
          timezone: 'America/New_York',
        },
        id: 16,
        name: 'Syfy',
        officialSite: null,
      },
      officialSite: 'http://stargate.mgm.com/view/series/2/index.html',
      premiered: '2004-07-16',
      rating: {
        average: 8.8,
      },
      runtime: 60,
      schedule: {
        days: ['Friday'],
        time: '21:00',
      },
      status: 'Ended',
      summary:
        "<p>Atlantis, built thousands of years ago by the highly evolved Ancients, is home base for an elite expedition from Earth. These courageous military commanders and scientists leap through the city's Stargate to explore the wondrous Pegasus galaxy and battle the treacherous Wraith, who seek control of Atlantis -- at any cost.</p>",
      type: 'Scripted',
      updated: 1730234034,
      url: 'https://www.tvmaze.com/shows/206/stargate-atlantis',
      webChannel: null,
      weight: 94,
    },
  },
];

beforeEach(() => {
  vi.fn().mockResolvedValue(mockedData);
});

afterEach(() => {
  vi.resetAllMocks();
});

describe('useFetch', () => {
  test('should return the initial values for data, error and loading', async () => {
    const { result } = renderHook(() => useFetch({ url: mockedUrl }));
    const { data, error, loading } = result.current;

    expect(data).toEqual([]);
    expect(error).toEqual('');
    expect(loading).toBe(true);
  });

  test('should initially return true and then false', async () => {
    const { result } = renderHook(() => useFetch({ url: mockedUrl }));
    const { loading } = result.current;

    expect(loading).toBe(true);

    await waitFor(() => {
      const { loading } = result.current;
      expect(loading).toBe(false);
    });
  });

  test('should return data', async () => {
    const { result } = renderHook(() => useFetch({ url: mockedUrl }));

    await waitFor(() =>
      expect(result.current).toEqual({
        data: mockedData,
        error: '',
        loading: false,
      })
    );
  });
});
