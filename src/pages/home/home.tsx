import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import PosterCarousel from '@/components/poster-carousel/PosterCarousel';
import ShowBrowser from '@/components/show-browser/ShowBrowser';
import { useFetch } from '@/hooks/useFetch';
import '@/pages/home/styles.scss';
import { addShows } from '@/store/slices/showSlice';
import { Show, ShowSearch } from '@/store/types/show';
import urlConstants from '@/utilities/constants';
import { isEmpty } from '@/utilities/utils-lib';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(urlConstants.allShows);
  const { data } = useFetch({ url: searchQuery });
  const [browserTitle, setBrowserTitle] = useState('Latest TV & Movies');

  useEffect(() => {
    if (!isEmpty(data)) {
      let results: Show[] = data;

      if (Array.isArray(data)) {
        if ('show' in data[0]) {
          results = data.map((a: ShowSearch) => a.show);
        }
      }

      dispatch(addShows(results));
    }
  }, [data, dispatch]);

  const handleOnSearch = (query: string) => {
    setSearchQuery(`${urlConstants.searchShows}${query}`);
    setBrowserTitle('Search Results');
  };

  return (
    <div className='container'>
      <Header title='TV &amp; Movie Browser' onSearch={(query) => handleOnSearch(query)} />

      <PosterCarousel />

      <ShowBrowser title={browserTitle} />

      <Footer />
    </div>
  );
}
