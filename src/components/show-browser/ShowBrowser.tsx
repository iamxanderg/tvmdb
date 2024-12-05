import '@/components/show-browser/styles.scss';
import { RootState } from '@/store/store';
import { Show } from '@/store/types/show';
import { isEmpty } from '@/utilities/utils-lib';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ResponsivePaginationComponent from 'react-responsive-pagination';
import { Link } from 'react-router-dom';

type ShowBrowserType = {
  title: string;
};

export default function ShowBrowser(props: ShowBrowserType) {
  const { title } = props;
  const shows = useSelector((state: RootState) => state.showList.shows);
  const [currentPage, setCurrentPage] = useState(1);

  const resultsPerPage = 10;
  const totalPages = shows.length / resultsPerPage;
  const indexOfLastPost = currentPage * resultsPerPage;
  const indexOfFirstPost = indexOfLastPost - resultsPerPage;
  const currentShows = shows.slice(indexOfFirstPost, indexOfLastPost);

  function handlePageChange(page: number) {
    setCurrentPage(page);
  }

  const renderShowGrid = () => {
    if (currentShows?.length > 0) {
      return currentShows?.map((item: Show, index: number) => {
        return (
          <Link key={index} to={`/show/${item.id}`} title={item.name}>
            {!isEmpty(item?.image?.medium) && <img src={item.image.medium} title={item.name} />}
            <p>{item.name}</p>
          </Link>
        );
      });
    }
  };

  return (
    <div className='show-browser'>
      <h2>{title}</h2>

      <div className='grid-container'>{shows && renderShowGrid()}</div>

      <ResponsivePaginationComponent
        total={totalPages}
        current={currentPage}
        onPageChange={(page) => handlePageChange(page)}
      />
    </div>
  );
}
